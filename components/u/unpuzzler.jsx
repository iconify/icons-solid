import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.v1hkkwb0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.63 17.86a5.82 5.82 0 0 0-4.57 2.22V9.72H22.43a5.87 5.87 0 1 1-7.3 0H4.5v28.56h10.63a5.87 5.87 0 1 1 7.3 0h10.63v-10.9a5.86 5.86 0 1 0 4.57-9.52");
}
</style><path class="v1hkkwb0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:unpuzzler"} {...others} />);
}

export default Component;
