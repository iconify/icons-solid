import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz_kbtsof.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wbizk1a7x.css';
import '../../css/i/ip79ax0mg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iz_kbtsof secondary"/><g class="dt0cm9dhy primary"><path class="wbizk1a7x"/><path class="ip79ax0mg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:garage-open-duo"} {...others} />);
}

export default Component;
