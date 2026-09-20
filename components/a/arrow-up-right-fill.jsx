import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fp6d4lbbr {
  fill: currentColor;
  d: path("M200 64v104a8 8 0 0 1-13.66 5.66L140 127.31l-70.34 70.35a8 8 0 0 1-11.32-11.32L128.69 116L82.34 69.66A8 8 0 0 1 88 56h104a8 8 0 0 1 8 8");
}
</style><path class="fp6d4lbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-up-right-fill"} {...others} />);
}

export default Component;
