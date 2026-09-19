import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.r4iyyok8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.25 19.855a9.75 9.75 0 0 1 9.75 9.75v9.75h0h-9.75a9.75 9.75 0 0 1-9.75-9.75v0a9.75 9.75 0 0 1 9.75-9.75m9.75 19.5h9.75a9.75 9.75 0 0 0 9.75-9.75h0a9.75 9.75 0 0 0-9.75-9.75h0a9.75 9.75 0 0 0-9.75 9.75");
}

.w70ucby-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.995 12.371a12.72 12.72 0 0 1 0 17.989L24 39.354h0l-8.994-8.994a12.72 12.72 0 0 1 0-17.989h0a12.72 12.72 0 0 1 17.989 0");
}
</style><path class="r4iyyok8r"/><path class="w70ucby-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:raindrop"} {...others} />);
}

export default Component;
