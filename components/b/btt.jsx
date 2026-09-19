import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ir4y4fk6l.css';
import '../../css/m/md286fbip.css';
import '../../css/j/j1q8n0b_v.css';
import '../../css/q/qg_vemb-q.css';
import '../../css/c/c19b_rbpl.css';
import '../../css/g/g5v17fbzi.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="ir4y4fk6l"/><g class="md286fbip"><path class="j1q8n0b_v"/><path class="qg_vemb-q"/><path class="c19b_rbpl"/><path class="g5v17fbzi"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:btt"} {...others} />);
}

export default Component;
