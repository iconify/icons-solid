import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.god-9kx5z {
  fill: currentColor;
  d: path("m229.66 197.66l-32 32a8 8 0 0 1-11.32-11.32L204.69 200H80a8 8 0 0 1-8-8V59.31L53.66 77.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L88 59.31V184h116.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32");
}
</style><path class="god-9kx5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:vector-two"} {...others} />);
}

export default Component;
