import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qp7s12n9q.css';
import '../../css/g/ggydu-ymh.css';
import '../../css/n/noycn-pgy.css';
import '../../css/q/qc72m0b1u.css';
import '../../css/q/qul_n1b-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qp7s12n9q wm-shadow"/><path class="ggydu-ymh"/><path class="noycn-pgy"/><path class="qc72m0b1u"/><path class="qul_n1b-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:align-top"} {...others} />);
}

export default Component;
