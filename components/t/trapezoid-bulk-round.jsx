import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qyrvbclot {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.217 4.024l9 2A1 1 0 0 1 22 7v10a1 1 0 0 1-.783.976l-18 4A1 1 0 0 1 2 21V3a1.002 1.002 0 0 1 1.217-.976Z");
}
</style><path class="qyrvbclot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:trapezoid-bulk-round"} {...others} />);
}

export default Component;
