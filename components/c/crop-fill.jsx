import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.klj4fkr8b {
  fill: currentColor;
  d: path("M7 3v13a1 1 0 0 0 1 1h13a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H8a3 3 0 0 1-3-3V7H3a1 1 0 0 1 0-2h2V3a1 1 0 0 1 2 0m3 2h6a3 3 0 0 1 3 3v6a1 1 0 0 1-2 0V8a1 1 0 0 0-1-1h-6a1 1 0 0 1 0-2");
}
</style><path class="klj4fkr8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:crop-fill"} {...others} />);
}

export default Component;
