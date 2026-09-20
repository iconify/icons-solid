import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h-nr8zbtq {
  fill: currentColor;
  d: path("M7 18V6h3v12zm7 0V6h3v12zM2 4V2h20v2zm0 18v-2h20v2z");
}
</style><path class="h-nr8zbtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-items-stretch-sharp"} {...others} />);
}

export default Component;
