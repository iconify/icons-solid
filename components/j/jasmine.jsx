import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.owqfcy2rb {
  d: path("M7.5 14.25Q3 14 3.5 9.5q4.5.5 4 4.75Z");
}

.t2ka47b2d {
  d: path("M12.25 9.75a1.75 1.75 0 1 1-.5-3A1.75 1.75 0 1 1 14.5 5.5a1.75 1.75 0 1 1 2 2a1.75 1.75 0 1 1-1.25 2.75a1.75 1.75 0 1 1-3-.5Z");
}

.trc81unxh {
  d: path("M4 21q3-8 8.25-11.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t2ka47b2d"/><path class="trc81unxh"/><path class="owqfcy2rb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:jasmine"} {...others} />);
}

export default Component;
