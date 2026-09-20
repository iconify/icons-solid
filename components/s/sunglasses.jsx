import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ctw1f1b_i {
  fill: currentColor;
  d: path("M200 40a8 8 0 0 0 0 16a16 16 0 0 1 16 16v56H40V72a16 16 0 0 1 16-16a8 8 0 0 0 0-16a32 32 0 0 0-32 32v92a44 44 0 0 0 88 0v-20h32v20a44 44 0 0 0 88 0V72a32 32 0 0 0-32-32m12.63 137.31L179.31 144H216v20a27.8 27.8 0 0 1-3.37 13.31M40 164v-16.69l41.31 41.32A28 28 0 0 1 40 164m56 0a27.8 27.8 0 0 1-3.37 13.31L59.31 144H96Zm64 0v-16.69l41.31 41.32A28 28 0 0 1 160 164");
}
</style><path class="ctw1f1b_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:sunglasses"} {...others} />);
}

export default Component;
