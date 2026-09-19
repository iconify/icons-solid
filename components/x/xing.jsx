import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.w6-10nbsw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.79 12.048h6.29l5.033 7.549l-6.29 12.58H7.016l7.549-12.58zM33.436 4.5h7.548l-12.58 22.645L37.21 43.5h-7.55l-7.548-16.355z");
}
</style><path class="w6-10nbsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:xing"} {...others} />);
}

export default Component;
