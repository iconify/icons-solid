import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cual_ub6w {
  fill: currentColor;
  d: path("M21 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0ZM7 3h6a4 4 0 0 1 0 8H7a4 4 0 0 1 0-8m4 10h2a4 4 0 0 1 0 8h-2a4 4 0 0 1 0-8");
}
</style><path class="cual_ub6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:align-right-fill-round"} {...others} />);
}

export default Component;
