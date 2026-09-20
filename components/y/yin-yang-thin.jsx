import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.o_krribbr {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28M36 128a92.1 92.1 0 0 1 92-92a44 44 0 0 1 0 88a52 52 0 0 0-37.44 88A92.14 92.14 0 0 1 36 128m92 92a44 44 0 0 1 0-88a52 52 0 0 0 37.44-88A92 92 0 0 1 128 220m8-44a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-16-96a8 8 0 1 1 8 8a8 8 0 0 1-8-8");
}
</style><path class="o_krribbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:yin-yang-thin"} {...others} />);
}

export default Component;
