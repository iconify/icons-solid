import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.evgmc0bvt {
  d: path("M5 9.5a7 7.5 0 1 0 14 0a7 7.5 0 1 0-14 0Z");
}

.n2k9n8zij {
  d: path("M12 17q-1.25 2.25.5 4.5M9.75 13L12 6.5l2.25 6.5m-3.75-2.25h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="evgmc0bvt"/><path class="n2k9n8zij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:balloon-letters"} {...others} />);
}

export default Component;
