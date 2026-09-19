import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c24510bai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.613 23.982c5.2 0 9.39-3.801 9.39-8.519v-1.952c0-4.714-4.19-8.51-9.39-8.51H16.388c-5.2 0-9.392 3.792-9.392 8.514v1.952c0 1.51.206 3.097 1.186 4.154L29.86 43V23.982z");
}
</style><path class="c24510bai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lingq"} {...others} />);
}

export default Component;
