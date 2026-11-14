import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xjue61bkl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 13.5v-9A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5v9m-13.131 0h14.262a1.75 1.75 0 0 1 1.672 2.265l-.923 3A1.75 1.75 0 0 1 18.207 20H5.793a1.75 1.75 0 0 1-1.673-1.235l-.923-3A1.75 1.75 0 0 1 4.869 13.5M9 7h6m-6 3h3");
}
</style><path class="xjue61bkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:business-card-holder"} {...others} />);
}

export default Component;
