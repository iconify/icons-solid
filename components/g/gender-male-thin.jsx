import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.hj1d-6b0y {
  fill: currentColor;
  d: path("M216 36h-48a4 4 0 0 0 0 8h38.35l-51.53 51.52a76 76 0 1 0 5.66 5.66L212 49.66V88a4 4 0 0 0 8 0V40a4 4 0 0 0-4-4m-63.93 164.11a68 68 0 1 1 0-96.18a68.08 68.08 0 0 1 0 96.18");
}
</style><path class="hj1d-6b0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:gender-male-thin"} {...others} />);
}

export default Component;
