import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci7fytbhb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zn6rbk6zn.css';
import '../../css/a/azejgcbty.css';
import '../../css/c/clnq2hbxi.css';
import '../../css/w/wt3kbbycd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ci7fytbhb secondary"/><g class="dt0cm9dhy primary"><path class="zn6rbk6zn"/><path class="azejgcbty"/><path class="clnq2hbxi"/><path class="wt3kbbycd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:trash-can-duo"} {...others} />);
}

export default Component;
