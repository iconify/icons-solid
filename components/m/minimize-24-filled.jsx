import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lsfmj_w-i {
  fill: currentColor;
  d: path("M3.996 13H20a1 1 0 1 0 0-2H3.996a1 1 0 1 0 0 2");
}
</style><path class="lsfmj_w-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:minimize-24-filled"} {...others} />);
}

export default Component;
