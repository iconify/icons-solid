import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zqqbbmz0g {
  fill: currentColor;
  d: path("M21 22h-6v-3a3 3 0 1 0-6 0v3H3a1 1 0 0 1-1-1v-2a5.01 5.01 0 0 1 4-4.901V8a6 6 0 1 1 12 0v6.099A5.01 5.01 0 0 1 22 19v2a1 1 0 0 1-1 1M13 7V6a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2Zm-2 15v-3a1 1 0 0 1 2 0v3Z");
}
</style><path class="zqqbbmz0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:town-hall-fill-round"} {...others} />);
}

export default Component;
