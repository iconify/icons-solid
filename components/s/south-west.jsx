import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sxwgrgb_u {
  fill: currentColor;
  d: path("M5 19V9h2v6.6L18.6 4L20 5.4L8.4 17H15v2z");
}
</style><path class="sxwgrgb_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:south-west"} {...others} />);
}

export default Component;
