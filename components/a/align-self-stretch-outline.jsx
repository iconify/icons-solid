import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mzs2pl16h {
  fill: currentColor;
  d: path("M2 4V2h20v2zm0 18v-2h20v2zm8.5-4.5V6h3v11.5z");
}
</style><path class="mzs2pl16h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-self-stretch-outline"} {...others} />);
}

export default Component;
