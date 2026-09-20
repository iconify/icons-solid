import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.efoex2ifw {
  fill: currentColor;
  d: path("M2 18V6h12v12zM16 8V6h2v2zm0 10v-2h2v2zm4-10V6h2v2zm0 5v-2h2v2zm0 5v-2h2v2z");
}
</style><path class="efoex2ifw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:move-selection-left"} {...others} />);
}

export default Component;
