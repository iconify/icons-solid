import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kxcaocbcl {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-3.45l11.55-3L13.6 6H4zM6.375 18H20V6h-4.325L18 15zM4 6");
}
</style><path class="kxcaocbcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:transition-chop-outline-sharp"} {...others} />);
}

export default Component;
