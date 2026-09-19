import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gvvvp_bws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.241 7.632L24 12.378l4.759-4.746v13.349l7.498-7.498v7.244H43.5L28.335 35.892");
}

.kg8byyb0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 40.368a17.83 17.83 0 0 0-5.222-12.607l-7.035-7.034m24.514 0l-9.687 9.687M19.241 7.632v13.349");
}

.xzq3ou64b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 20.727l11.275 11.275a11.83 11.83 0 0 1 3.466 8.366h9.518c0-6.318-2.51-12.378-6.978-16.847l-2.54-2.54l-7.498-7.498v7.244zM24 12.378v13.704");
}
</style><path class="gvvvp_bws"/><path class="xzq3ou64b"/><path class="kg8byyb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ruralvia"} {...others} />);
}

export default Component;
