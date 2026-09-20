import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kvp2zmb6s.css';
import '../../css/j/jua_5t0el.css';
import '../../css/c/cplsnnb9q.css';
import '../../css/q/q3pp0ac8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kvp2zmb6s"/><path class="jua_5t0el"/><path class="cplsnnb9q"/><path class="q3pp0ac8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:ambulance"} {...others} />);
}

export default Component;
