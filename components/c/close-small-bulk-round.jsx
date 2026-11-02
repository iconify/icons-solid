import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w41rlbb5w {
  fill: currentColor;
  d: path("m12 10.586l3.293-3.293a.999.999 0 1 1 1.414 1.414L13.414 12l3.293 3.293a.999.999 0 1 1-1.414 1.414L12 13.414l-3.293 3.293a.999.999 0 1 1-1.414-1.414L10.586 12L7.293 8.707a.999.999 0 1 1 1.414-1.414Z");
}
</style><path class="w41rlbb5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:close-small-bulk-round"} {...others} />);
}

export default Component;
