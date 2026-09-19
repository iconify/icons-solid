import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qnxdnwbqt {
  fill: currentColor;
  d: path("M2 2v6.7h1V22h18V8.7h1V2zm13 12H9v-2h6zm5-7H4V4h16z");
}
</style><path class="qnxdnwbqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-inventory-2"} {...others} />);
}

export default Component;
