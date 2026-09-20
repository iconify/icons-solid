import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qyiv18v2z.css';
import '../../css/i/i3ssdb-4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="qyiv18v2z"/><path class="i3ssdb-4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:briefcase-sharp-duotone"} {...others} />);
}

export default Component;
