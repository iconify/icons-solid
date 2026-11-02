import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g2wtxpb1o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m6.106 10.553l3-6a.998.998 0 0 1 1.788 0L13 8.764l1.106-2.211a.998.998 0 0 1 1.788 0l6 12A1 1 0 0 1 21 20H3a1 1 0 0 1-.894-1.447Z");
}
</style><path class="g2wtxpb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mountain-bulk-sharp"} {...others} />);
}

export default Component;
