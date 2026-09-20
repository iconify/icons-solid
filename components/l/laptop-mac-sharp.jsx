import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yhrctcb-v {
  fill: currentColor;
  d: path("M1 19.27V18h2.77L3 17.23V4h18v13.23l-.77.77H23v1.27zm11.434-.683q.182-.181.182-.433t-.182-.434t-.434-.18t-.434.181t-.182.434q0 .252.182.433t.434.182t.434-.181");
}
</style><path class="yhrctcb-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:laptop-mac-sharp"} {...others} />);
}

export default Component;
