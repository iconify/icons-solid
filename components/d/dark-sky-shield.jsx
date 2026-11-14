import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g3y382w1l {
  d: path("M10.5 7c0-2.5 1.75-4 4-4s4 1.5 4 4ZM3 21.5h18M12.5 9.75L11 17.5m5.5-7.75L18 17.5");
}

.roqqafbak {
  d: path("M6 21.5V7a4 4 0 0 1 4-4h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="roqqafbak"/><path class="g3y382w1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dark-sky-shield"} {...others} />);
}

export default Component;
