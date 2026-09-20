import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iptlssi9r {
  fill: currentColor;
  d: path("M3 19V5h3v14zm4 0V5h10v14zm11 0V5h3v14zm-9-2h6V7H9zm3-5");
}
</style><path class="iptlssi9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-array-outline-sharp"} {...others} />);
}

export default Component;
