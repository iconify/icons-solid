import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ruwuvqbjk {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14v-7.615H5zm7-11h6V6h-6z");
}
</style><path class="ruwuvqbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tabs-sharp"} {...others} />);
}

export default Component;
