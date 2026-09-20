import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bfj114b9r {
  fill: currentColor;
  d: path("M216 36h-48a4 4 0 0 0 0 8h38.34L168 82.35l-21.17-21.17a4 4 0 1 0-5.66 5.65L162.34 88l-21.17 21.18a68.16 68.16 0 1 0 5.65 5.66L168 93.67l21.17 21.17a4 4 0 1 0 5.66-5.66L173.66 88L212 49.66V88a4 4 0 0 0 8 0V40a4 4 0 0 0-4-4m-77.57 166.45A60 60 0 1 1 156 160a60.07 60.07 0 0 1-17.57 42.45");
}
</style><path class="bfj114b9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:gender-transgender-thin"} {...others} />);
}

export default Component;
