import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qwu4u_bcv {
  fill: currentColor;
  d: path("M2 20V4h20v16zm6-5h8V9H8z");
}
</style><path class="qwu4u_bcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:picture-in-picture-center-sharp"} {...others} />);
}

export default Component;
