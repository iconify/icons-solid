import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ymkgf8fde {
  fill: currentColor;
  d: path("M212 132h-.68l-31.94-95.79A12 12 0 0 0 168 28h-32a12 12 0 0 0 0 24h23.35l14.83 44.49L114.59 164H83.2a40 40 0 1 0-2.55 24H120a12 12 0 0 0 9-4.06l54-61.13l5.6 16.81A40 40 0 1 0 212 132M44 188a16 16 0 1 1 16-16a16 16 0 0 1-16 16m168 0a16 16 0 1 1 16-16a16 16 0 0 1-16 16");
}
</style><path class="ymkgf8fde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:scooter-bold"} {...others} />);
}

export default Component;
