import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hq8hhbc8g {
  fill: currentColor;
  d: path("M22 8v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 21H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5M4 9v7a3.004 3.004 0 0 0 3 3h10a3 3 0 0 0 3-3V9Zm5 4h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><path class="hq8hhbc8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:window-minus-fill-round"} {...others} />);
}

export default Component;
