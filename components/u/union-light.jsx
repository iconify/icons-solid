import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.i9g9dibsl {
  fill: currentColor;
  d: path("M206 64v80a78 78 0 0 1-156 0V64a6 6 0 0 1 12 0v80a66 66 0 0 0 132 0V64a6 6 0 0 1 12 0");
}
</style><path class="i9g9dibsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:union-light"} {...others} />);
}

export default Component;
