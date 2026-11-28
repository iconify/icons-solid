import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgago0byv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fe53ifbdz.css';
import '../../css/y/ygbs7gbiy.css';
import '../../css/l/l0zvp3okm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary zgago0byv"/><g class="dt0cm9dhy primary"><path class="fe53ifbdz"/><path class="ygbs7gbiy"/><path class="l0zvp3okm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:history-x-duo"} {...others} />);
}

export default Component;
