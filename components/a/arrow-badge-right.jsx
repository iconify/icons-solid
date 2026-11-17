import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p_u1znbdx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 19H5c-.369 0-.369-.631 0-1l5-5a1.414 1.414 0 0 0 0-2L5 6c-.369-.369-.369-1 0-1h8l6 6a1.414 1.414 0 0 1 0 2l-6 6z");
}
</style><path class="p_u1znbdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-badge-right"} {...others} />);
}

export default Component;
