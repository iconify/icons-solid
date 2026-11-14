import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lh9fudbbd {
  fill: currentColor;
  d: path("M21 18a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-5a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-5a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z");
}
</style><path class="lh9fudbbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-4-24-filled"} {...others} />);
}

export default Component;
