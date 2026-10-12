import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z1p2i-i9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.29 3.4l1.79 2.47q.29.4.79.32l3-.48q.49-.07.42.42l-.48 3q-.08.5.32.79l2.47 1.79q.4.29 0 .58l-2.47 1.79q-.4.29-.32.79l.48 3q.07.49-.42.42l-3-.48q-.5-.08-.79.32l-1.79 2.47q-.29.4-.58 0l-1.79-2.47q-.29-.4-.79-.32l-3 .48q-.49.07-.42-.42l.48-3q.08-.5-.32-.79L3.4 12.29q-.4-.29 0-.58l2.47-1.79q.4-.29.32-.79l-.48-3q-.07-.49.42-.42l3 .48q.5.08.79-.32l1.79-2.47q.29-.4.58 0");
}
</style><path class="z1p2i-i9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:octagram"} {...others} />);
}

export default Component;
