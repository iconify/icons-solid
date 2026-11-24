import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aixf67eph {
  fill: currentColor;
  d: path("M22 8v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 21H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5M4 9v7a3.004 3.004 0 0 0 3 3h10a3 3 0 0 0 3-3V9Zm9 2v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0m-1 5h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2");
}
</style><path class="aixf67eph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:window-warning-fill-round"} {...others} />);
}

export default Component;
