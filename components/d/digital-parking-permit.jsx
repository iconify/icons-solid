import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hzygp7n_n {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.875 1.25h4.25q2.123 0 3.624 1.501t1.501 3.624v11.25q0 2.123-1.501 3.624t-3.624 1.501h-4.25q-2.123 0-3.624-1.501T4.75 17.625V6.375q0-2.123 1.501-3.624T9.875 1.25");
}
</style><path class="hzygp7n_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:digital-parking-permit"} {...others} />);
}

export default Component;
