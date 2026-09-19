import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ik3ck5bam {
  fill: currentColor;
  d: path("M19 19V3H5v16H3v2h18v-2zm-4-6h-2v-2h2z");
}
</style><path class="ik3ck5bam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-door-front"} {...others} />);
}

export default Component;
