import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hrtc1abwy.css';
import '../../css/u/uvkpwpdid.css';
import '../../css/b/bybu2130v.css';
import '../../css/i/i8q27zpaj.css';
import '../../css/u/uzj8tpbqb.css';
import '../../css/m/mr6e1qb_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hrtc1abwy"/><path class="uvkpwpdid"/><path class="bybu2130v"/><path class="i8q27zpaj"/><path class="uzj8tpbqb"/><path class="mr6e1qb_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:accounting-bill-stack-1"} {...others} />);
}

export default Component;
