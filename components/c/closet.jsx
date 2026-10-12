import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z2ie2lofj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h18.5m-13.75 0V6m9-2.25V6m-10 .25h2q1 0 1.11.99l1.28 11.27q.11.99-.89.99H5q-1 0-.89-.99L5.39 7.24q.11-.99 1.11-.99m8.75 0h2.5q1 0 1.52.85l.96 1.55q.52.85-.23 1.23q-.75.37-.75 1.37v7.25q0 1-1 1h-3.5q-1 0-1-1v-7.25q0-1-.75-1.37q-.75-.38-.23-1.23l.96-1.55q.52-.85 1.52-.85");
}
</style><path class="z2ie2lofj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:closet"} {...others} />);
}

export default Component;
