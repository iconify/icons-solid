import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.en960lp3z {
  fill: currentColor;
  d: path("M224 96v64a16 16 0 0 1-16 16h-72v32a8 8 0 0 1-16 0v-32H48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h72V48a8 8 0 0 1 16 0v32h72a16 16 0 0 1 16 16");
}
</style><path class="en960lp3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:align-center-horizontal-simple-fill"} {...others} />);
}

export default Component;
