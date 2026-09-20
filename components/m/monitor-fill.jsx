import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.v-26zkb3d {
  fill: currentColor;
  d: path("M232 64v112a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h160a24 24 0 0 1 24 24m-72 152H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16");
}
</style><path class="v-26zkb3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:monitor-fill"} {...others} />);
}

export default Component;
