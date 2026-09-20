import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j9w6w3bqk {
  fill: currentColor;
  d: path("M5.5 18.5V9h1v8.5H15v1zm5-5V4h1v8.5H20v1z");
}
</style><path class="j9w6w3bqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:more-down-outline"} {...others} />);
}

export default Component;
