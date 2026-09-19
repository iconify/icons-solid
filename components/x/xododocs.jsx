import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qs52qlbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.11 25.24V10s-12.83 1.65-12.83 6.33c0 5.06 18.22 7.75 18.22 7.75V40s-18.22-2.47-18.22-8.3c0-3.86 12.83-6.46 12.83-6.46M9.89 22.76V38s12.83-1.65 12.83-6.33c0-5.06-18.22-7.75-18.22-7.75V8.05s18.22 2.47 18.22 8.3c0 3.81-12.83 6.41-12.83 6.41");
}
</style><path class="qs52qlbkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:xododocs"} {...others} />);
}

export default Component;
