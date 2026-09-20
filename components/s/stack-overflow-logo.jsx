import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bctxom9mh.css';
import '../../css/j/jcndr8j_j.css';
import '../../css/o/ovc_rh5fd.css';
import '../../css/q/qw1zuwngg.css';
import '../../css/h/hkxvuqq0u.css';
import '../../css/o/owb6p91nt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bctxom9mh"/><path class="jcndr8j_j"/><path class="ovc_rh5fd"/><path class="qw1zuwngg"/><path class="hkxvuqq0u"/><path class="owb6p91nt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:stack-overflow-logo"} {...others} />);
}

export default Component;
