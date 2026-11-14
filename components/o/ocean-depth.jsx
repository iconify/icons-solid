import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oatx8yp1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6q3-2 6 0t6 0m-12 6q3-2 6 0t6 0m-12 6q3-2 6 0t6 0m5-14v16m-2.25-2.25L19.5 20l2.25-2.25");
}
</style><path class="oatx8yp1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ocean-depth"} {...others} />);
}

export default Component;
