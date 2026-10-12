import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f3n1gfb0c {
  d: path("M2.75 21.25V4.75h18.5v16.5M2.75 16h18.5");
}

.ssx2jj5vk {
  d: path("M8.5 8h7v5h-7zm3.5 5v3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="f3n1gfb0c"/><path class="ssx2jj5vk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cubicle-sharp"} {...others} />);
}

export default Component;
