import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.a-qw5ibrb {
  fill: currentColor;
  d: path("M236 48a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m-60.49 39.51L84 179v-67a12 12 0 0 0-24 0v96a12 12 0 0 0 12 12h96a12 12 0 0 0 0-24h-67l91.52-91.51a12 12 0 0 0-17-17Z");
}
</style><path class="a-qw5ibrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-down-left-bold"} {...others} />);
}

export default Component;
