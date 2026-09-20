import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.skpvrup_r {
  fill: currentColor;
  d: path("M85.06 43.22L31.11 128l54 84.78a6 6 0 0 1-1.84 8.28a6 6 0 0 1-8.28-1.84l-56-88a6 6 0 0 1 0-6.44l56-88a6 6 0 0 1 10.12 6.44Zm152 81.56l-56-88a6 6 0 1 0-10.12 6.44L224.89 128l-53.95 84.78a6 6 0 0 0 1.84 8.28a6 6 0 0 0 8.28-1.84l56-88a6 6 0 0 0 0-6.44");
}
</style><path class="skpvrup_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:brackets-angle-light"} {...others} />);
}

export default Component;
