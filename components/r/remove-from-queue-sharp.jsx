import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b_vfi7x7s {
  fill: currentColor;
  d: path("M8 12h8v-2H8zm0 9v-2H2V3h20v16h-6v2z");
}
</style><path class="b_vfi7x7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:remove-from-queue-sharp"} {...others} />);
}

export default Component;
