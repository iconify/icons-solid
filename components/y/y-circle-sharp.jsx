import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.srsjnzvag {
  fill: currentColor;
  d: path("M11.546 17.539h.92v-3.972L15.59 7.77h-1.01L12 12.6L9.45 7.77H8.41l3.136 5.842zm-3.052 2.76q-1.642-.701-2.867-1.926t-1.926-2.867T3 12t.701-3.506t1.926-2.857T8.494 3.71T12 3t3.506.71t2.857 1.927t1.926 2.857T21 12t-.71 3.506t-1.926 2.867t-2.858 1.926T12 21t-3.506-.701");
}
</style><path class="srsjnzvag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:y-circle-sharp"} {...others} />);
}

export default Component;
