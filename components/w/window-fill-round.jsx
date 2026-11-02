import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r2mq-n2xz {
  fill: currentColor;
  d: path("M22 16a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 21H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5ZM4 16a3.004 3.004 0 0 0 3 3h10a3 3 0 0 0 3-3V9H4Z");
}
</style><path class="r2mq-n2xz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:window-fill-round"} {...others} />);
}

export default Component;
