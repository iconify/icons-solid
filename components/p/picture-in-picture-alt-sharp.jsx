import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.icija0bln {
  fill: currentColor;
  d: path("M2 20V4h20v16zm9-3h8v-6h-8zm4-3");
}
</style><path class="icija0bln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:picture-in-picture-alt-sharp"} {...others} />);
}

export default Component;
