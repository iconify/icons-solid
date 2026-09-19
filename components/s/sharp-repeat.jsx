import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ev38se6be {
  fill: currentColor;
  d: path("M7 7h10v3l4-4l-4-4v3H5v6h2zm10 10H7v-3l-4 4l4 4v-3h12v-6h-2z");
}
</style><path class="ev38se6be"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-repeat"} {...others} />);
}

export default Component;
