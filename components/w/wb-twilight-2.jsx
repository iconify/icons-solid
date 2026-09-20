import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.etb2r5bmm {
  fill: currentColor;
  d: path("M2 20v-2h20v2zm3-4q0-2.925 2.038-4.962T12 9t4.963 2.038T19 16z");
}
</style><path class="etb2r5bmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:wb-twilight-2"} {...others} />);
}

export default Component;
