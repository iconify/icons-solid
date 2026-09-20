import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w8gq167yp {
  fill: currentColor;
  d: path("M15 20v-2h3V6h-3V4h5v16zM4 20V4h5v2H6v12h3v2z");
}
</style><path class="w8gq167yp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:data-array-outline"} {...others} />);
}

export default Component;
