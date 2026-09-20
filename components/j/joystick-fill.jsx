import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.x0rrx1bjq {
  fill: currentColor;
  d: path("M224 160v48a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-48a16 16 0 0 1 16-16h72V95.19a40 40 0 1 1 16 0V144h72a16 16 0 0 1 16 16m-64-40a8 8 0 0 0 8 8h32a8 8 0 0 0 0-16h-32a8 8 0 0 0-8 8");
}
</style><path class="x0rrx1bjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:joystick-fill"} {...others} />);
}

export default Component;
