import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m4bulibns {
  d: path("m15.5 5.5l2.25 1.25L16 8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z0qjqn6_v {
  d: path("M4.75 12.5L8 11l2 2l2-2l2 2l2-2l3.25 1.5c0 5-3 8-7.25 8s-7.25-3-7.25-8ZM8 11V7.5a4 4 0 0 1 8 0V11m-3-4.25h.01");
}
</style><g class="ulnmmdpxh"><path class="z0qjqn6_v"/><path class="m4bulibns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:egg-development"} {...others} />);
}

export default Component;
