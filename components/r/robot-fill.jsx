import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oi-c5cb3v {
  fill: currentColor;
  d: path("M13 5.733V8h4a3 3 0 0 1 3 3v3h1a1 1 0 0 1 0 2h-1v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-3H3a1 1 0 0 1 0-2h1v-3a3 3 0 0 1 3-3h4V5.733a2.001 2.001 0 1 1 2 0M10 15v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0m6 0v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0");
}
</style><path class="oi-c5cb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:robot-fill"} {...others} />);
}

export default Component;
