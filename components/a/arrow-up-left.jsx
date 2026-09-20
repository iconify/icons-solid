import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dq_0fcb_h {
  fill: currentColor;
  d: path("M197.66 197.66a8 8 0 0 1-11.32 0L72 83.31V168a8 8 0 0 1-16 0V64a8 8 0 0 1 8-8h104a8 8 0 0 1 0 16H83.31l114.35 114.34a8 8 0 0 1 0 11.32");
}
</style><path class="dq_0fcb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-up-left"} {...others} />);
}

export default Component;
