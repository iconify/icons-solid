import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fy5-rvbru {
  d: path("M5.25 8.25h4v7h-4Zm9.5 0h4v7h-4ZM12 10h.01M12 13.5h.01");
}

.r77lclbfk {
  d: path("M2.5 5.5h19V18h-19Zm3 12.5v2m13-2v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r77lclbfk"/><path class="fy5-rvbru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:clock-digital"} {...others} />);
}

export default Component;
