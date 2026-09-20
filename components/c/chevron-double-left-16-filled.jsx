import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.n6_dmbdgl {
  fill: currentColor;
  d: path("M6.97 3.22a.75.75 0 1 1 1.06 1.06L4.31 8l3.72 3.72a.75.75 0 1 1-1.06 1.06L2.72 8.53a.75.75 0 0 1 0-1.06zm4.5 0a.75.75 0 1 1 1.06 1.06L8.81 8l3.72 3.72a.75.75 0 1 1-1.06 1.06L7.22 8.53a.75.75 0 0 1 0-1.06z");
}
</style><path class="n6_dmbdgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chevron-double-left-16-filled"} {...others} />);
}

export default Component;
