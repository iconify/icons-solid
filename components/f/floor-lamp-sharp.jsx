import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mtffjhhpv {
  fill: currentColor;
  d: path("M11.52 19v-8H6.015l2.178-7h7.65l2.179 7h-5.504v8zm-3 2v-1h7v1z");
}
</style><path class="mtffjhhpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:floor-lamp-sharp"} {...others} />);
}

export default Component;
