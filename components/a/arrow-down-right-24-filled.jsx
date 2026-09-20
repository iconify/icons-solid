import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l2idmd51c {
  fill: currentColor;
  d: path("M11 21a1 1 0 0 1 0-2h6.586L3.293 4.707a1 1 0 0 1 1.414-1.414L19 17.586V11a1 1 0 1 1 2 0v9a1 1 0 0 1-1 1z");
}
</style><path class="l2idmd51c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-right-24-filled"} {...others} />);
}

export default Component;
