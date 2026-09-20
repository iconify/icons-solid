import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.divu0sfhj {
  fill: currentColor;
  d: path("M138 204a10 10 0 1 1-10-10a10 10 0 0 1 10 10m33.53-43.85a74 74 0 0 0-87.06 0a6 6 0 0 0 7.06 9.7a62 62 0 0 1 72.94 0a6 6 0 0 0 8.38-1.32a6 6 0 0 0-1.32-8.38");
}
</style><path class="divu0sfhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:wifi-low-light"} {...others} />);
}

export default Component;
