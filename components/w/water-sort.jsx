import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fbx9cybsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.033 6.718l-1.846 2.59v28.553a3.42 3.42 0 0 1-6.841 0V9.309L5.5 6.719zm-8.687 6.067h6.841m15.079-6.067l-1.845 2.59v28.553a3.42 3.42 0 0 1-6.842 0V9.309l-1.845-2.59zm-8.687 16.7h6.842M42.5 6.718l-1.845 2.59v28.553a3.42 3.42 0 0 1-6.842 0V9.309l-1.846-2.59zm-8.687 8.868h6.841");
}
</style><path class="fbx9cybsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:water-sort"} {...others} />);
}

export default Component;
