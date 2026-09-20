import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.jc7b79alk {
  fill: currentColor;
  d: path("M12 4.957c0-.89-1.077-1.337-1.707-.707L4.25 10.293c-.63.63-.184 1.707.707 1.707H10.5a1.5 1.5 0 0 0 1.5-1.5z");
}
</style><path class="jc7b79alk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:caret-down-right-16-filled"} {...others} />);
}

export default Component;
