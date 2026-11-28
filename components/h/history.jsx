import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fe53ifbdz.css';
import '../../css/y/ygbs7gbiy.css';
import '../../css/q/qc03fjlhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fe53ifbdz"/><path class="ygbs7gbiy"/><path class="qc03fjlhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:history"} {...others} />);
}

export default Component;
