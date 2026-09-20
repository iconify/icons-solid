import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.butafzbhq {
  fill: currentColor;
  d: path("m212.24 132.24l-80 80a6 6 0 1 1-8.48-8.48l80-80a6 6 0 1 1 8.48 8.48m-16-96.48a6 6 0 0 0-8.48 0l-152 152a6 6 0 1 0 8.48 8.48l152-152a6 6 0 0 0 0-8.48");
}
</style><path class="butafzbhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:notches-light"} {...others} />);
}

export default Component;
