import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n44bslb1d {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zm5.826 2.02a.75.75 0 0 0-1.326.48v6.5a.75.75 0 1 0 1.5 0v-4.428l2.424 2.908a.75.75 0 0 0 1.152 0L15 10.822v4.428a.75.75 0 1 0 1.5 0v-6.5a.75.75 0 0 0-1.326-.48L12 12.079z");
}
</style><path class="n44bslb1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:rating-mature-24-filled"} {...others} />);
}

export default Component;
