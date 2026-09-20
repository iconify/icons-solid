import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.uzo5y4e2d {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m4 8.09a91.6 91.6 0 0 1 24 4.27v175.28a91.6 91.6 0 0 1-24 4.27Zm32 7.25a92.2 92.2 0 0 1 24 15v139.35a92.2 92.2 0 0 1-24 15ZM36 128a92.11 92.11 0 0 1 88-91.91v183.82A92.11 92.11 0 0 1 36 128m160 61.9V66.1a91.83 91.83 0 0 1 0 123.8");
}
</style><path class="uzo5y4e2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:circle-half-thin"} {...others} />);
}

export default Component;
