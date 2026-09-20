import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.am8l84brn {
  fill: currentColor;
  d: path("M11 1.1L13.9 4H18v4.1l2.9 2.9l-2.9 2.9l2.875 5.65l-1.325 1.325L13.9 18L11 20.9L8.1 18H4v-4.1L1.1 11L4 8.1V4h4.1z");
}
</style><path class="am8l84brn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:comic-bubble-sharp"} {...others} />);
}

export default Component;
