import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.lsew7yj0k {
  fill: currentColor;
  d: path("M138 128a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-78-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m136 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10");
}
</style><path class="lsew7yj0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dots-three-light"} {...others} />);
}

export default Component;
