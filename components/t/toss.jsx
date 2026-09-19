import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qj49azb3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.985 14.452c9.346-1.98 17.356 1.106 17.356 8.46c0 9.389-14.05 19.303-23.57 19.303L27.91 5.84c-9.52 0-23.57 9.914-23.57 19.303c0 7.354 8.01 10.44 17.357 8.46");
}
</style><path class="qj49azb3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:toss"} {...others} />);
}

export default Component;
