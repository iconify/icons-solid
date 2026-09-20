import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tayao2brm {
  fill: currentColor;
  d: path("M224.49 88.49a12 12 0 0 1-17 0L180 61v107a68 68 0 0 1-136 0V80a12 12 0 0 1 24 0v88a44 44 0 0 0 88 0V61l-27.51 27.49a12 12 0 1 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1 0 17");
}
</style><path class="tayao2brm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-u-right-up-bold"} {...others} />);
}

export default Component;
