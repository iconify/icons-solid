import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.uqu5rprzv {
  fill: currentColor;
  d: path("M168 224a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m64-160v112a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h160a24 24 0 0 1 24 24m-74.34 42.34l-24-24a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0 11.32 11.32L120 107.31V152a8 8 0 0 0 16 0v-44.69l10.34 10.35a8 8 0 0 0 11.32-11.32");
}
</style><path class="uqu5rprzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:monitor-arrow-up-fill"} {...others} />);
}

export default Component;
