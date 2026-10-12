import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ihkf1mbok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 21.25h5v-4.5h5v-4.5h5v-4.5h3.5M3 17L19 5M9.35 3.75h1.3q.6 0 .6.6v3.8q0 .6.6.6h1.8q.6 0 .6.6v.8q0 .6-.6.6h-4.3q-.6 0-.6-.6v-5.8q0-.6.6-.6");
}
</style><path class="ihkf1mbok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:stair-lift"} {...others} />);
}

export default Component;
