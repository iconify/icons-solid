import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efcc43b4p.css';
import '../../css/y/ykg1acbvw.css';
import '../../css/d/dn17_cc6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="efcc43b4p"/><path class="ykg1acbvw"/><path class="dn17_cc6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:time-clock-nine-twenty-five-1"} {...others} />);
}

export default Component;
