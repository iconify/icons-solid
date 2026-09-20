import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":10,"height":10};
const content = `<style>.p_lqh2b0i {
  fill: currentColor;
  d: path("M10 5A5 5 0 1 0 0 5a5 5 0 0 0 10 0M9 5a4 4 0 0 1-6.453 3.16L8.16 2.547C8.686 3.224 9 4.076 9 5M7.453 1.84L1.84 7.453A4 4 0 0 1 7.453 1.84");
}
</style><path class="p_lqh2b0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:presence-blocked-10-regular"} {...others} />);
}

export default Component;
