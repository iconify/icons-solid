import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lvmg05bai.css';
import '../../css/i/il9fwh0pn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lvmg05bai"/><path class="il9fwh0pn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:dashboard"} {...others} />);
}

export default Component;
