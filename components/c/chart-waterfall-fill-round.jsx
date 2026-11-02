import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tfcsc6zzg {
  fill: currentColor;
  d: path("M4 4v12a3 3 0 0 0 3 3h14a1 1 0 0 1 0 2H7a5 5 0 0 1-5-5V4a1 1 0 0 1 2 0m8 2v3a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0M8 9v7a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0m8 0v3a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0m4 3v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0");
}
</style><path class="tfcsc6zzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-waterfall-fill-round"} {...others} />);
}

export default Component;
