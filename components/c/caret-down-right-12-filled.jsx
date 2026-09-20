import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.fvcvx1bjo {
  fill: currentColor;
  d: path("M9.005 3.963c0-.891-1.077-1.337-1.707-.707L3.255 7.299c-.63.63-.184 1.707.707 1.707h3.543a1.5 1.5 0 0 0 1.5-1.5z");
}
</style><path class="fvcvx1bjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:caret-down-right-12-filled"} {...others} />);
}

export default Component;
