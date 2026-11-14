import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cqyi9acuc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.625 3h10.75A2.625 2.625 0 0 1 20 5.625v6.75A2.625 2.625 0 0 1 17.375 15H6.625A2.625 2.625 0 0 1 4 12.375v-6.75A2.625 2.625 0 0 1 6.625 3M8 15l-2 6m10-6l2 6m-6-6v3");
}
</style><path class="cqyi9acuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:canvas"} {...others} />);
}

export default Component;
