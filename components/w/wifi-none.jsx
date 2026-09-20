import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.or11-532u {
  fill: currentColor;
  d: path("M140 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><path class="or11-532u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:wifi-none"} {...others} />);
}

export default Component;
