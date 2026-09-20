import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.or_74dohl {
  fill: currentColor;
  d: path("M192 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m12 180a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12ZM136 68a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="or_74dohl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:device-tablet-camera-thin"} {...others} />);
}

export default Component;
