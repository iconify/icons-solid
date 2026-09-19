import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hllc59b3d {
  fill: currentColor;
  d: path("M19 3H5v18l7-3l7 3z");
}
</style><path class="hllc59b3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-turned-in"} {...others} />);
}

export default Component;
