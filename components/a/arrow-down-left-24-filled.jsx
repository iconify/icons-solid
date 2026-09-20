import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wjwqorb2u {
  fill: currentColor;
  d: path("M13 21a1 1 0 0 0 0-2H6.414L20.707 4.707a1 1 0 0 0-1.414-1.414L5 17.586V11a1 1 0 1 0-2 0v9a1 1 0 0 0 1 1z");
}
</style><path class="wjwqorb2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-left-24-filled"} {...others} />);
}

export default Component;
