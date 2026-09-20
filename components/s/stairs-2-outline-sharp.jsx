import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v-j44fq2d {
  fill: currentColor;
  d: path("M2 19v-2h6v-6h6V5h8v2h-6v6h-6v6z");
}
</style><path class="v-j44fq2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stairs-2-outline-sharp"} {...others} />);
}

export default Component;
