import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.rkf-s6b5a {
  fill: currentColor;
  d: path("M3 9a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zm9 0a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm9 0a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM3 17a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2z");
}
</style><path class="rkf-s6b5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-2-dashes-solid-28-filled"} {...others} />);
}

export default Component;
