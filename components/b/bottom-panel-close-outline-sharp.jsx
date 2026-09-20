import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bskkyvgxv {
  fill: currentColor;
  d: path("m12 11.5l4-4H8zM5 19h14v-3H5zm0-5h14V5H5zm0 2v3zm-2 5V3h18v18z");
}
</style><path class="bskkyvgxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bottom-panel-close-outline-sharp"} {...others} />);
}

export default Component;
