import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nxck4tfas {
  fill: currentColor;
  d: path("M40 84h36.29a28 28 0 0 0 55.42 0H216a4 4 0 0 0 0-8h-84.29a28 28 0 0 0-55.42 0H40a4 4 0 0 0 0 8m64-24a20 20 0 1 1-20 20a20 20 0 0 1 20-20m112 112h-20.29a28 28 0 0 0-55.42 0H40a4 4 0 0 0 0 8h100.29a28 28 0 0 0 55.42 0H216a4 4 0 0 0 0-8m-48 24a20 20 0 1 1 20-20a20 20 0 0 1-20 20");
}
</style><path class="nxck4tfas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:sliders-horizontal-thin"} {...others} />);
}

export default Component;
