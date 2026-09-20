import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.y15n-tbmo {
  fill: currentColor;
  d: path("m16 16.707l1.146 1.147a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708L4 4.707V17.5a.5.5 0 0 0 .794.404L10 14.118l5.206 3.786A.5.5 0 0 0 16 17.5zM16 4.5v9.379L4.794 2.673A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5");
}
</style><path class="y15n-tbmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:bookmark-off-20-filled"} {...others} />);
}

export default Component;
