import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sndm-x75k {
  fill: currentColor;
  d: path("M5.708 19L5 18.292L16.292 7H9V6h9v9h-1V7.708z");
}
</style><path class="sndm-x75k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:call-made-outline"} {...others} />);
}

export default Component;
