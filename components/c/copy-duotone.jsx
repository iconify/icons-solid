import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q2n8jx9ri.css';
import '../../css/i/i0dey_bnm.css';
import '../../css/q/qqm0x8h7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q2n8jx9ri"/><path class="i0dey_bnm"/><path class="qqm0x8h7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:copy-duotone"} {...others} />);
}

export default Component;
