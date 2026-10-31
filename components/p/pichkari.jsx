import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c43xod1_p.css';
import '../../css/p/pblhmn5is.css';
import '../../css/s/snmp3mbgc.css';
import '../../css/y/ybr8appkk.css';
import '../../css/s/sfup6u_uo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="c43xod1_p wm-shadow"/><path class="pblhmn5is wm-shadow"/><path class="snmp3mbgc"/><path class="ybr8appkk"/><path class="sfup6u_uo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:pichkari"} {...others} />);
}

export default Component;
