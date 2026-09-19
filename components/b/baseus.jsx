import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vz0d6hhsx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4m6.306 29.335S17.984 37.77 24 37.77s8.194-2.936 8.194-2.936M15.22 21.456c0 4.811 3.931 8.712 8.78 8.712s8.78-3.9 8.78-8.712s-3.931-8.711-8.78-8.711s-8.78 3.9-8.78 8.711l1.26-11.227");
}
</style><path class="vz0d6hhsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:baseus"} {...others} />);
}

export default Component;
