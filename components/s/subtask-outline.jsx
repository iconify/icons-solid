import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/an3xjeo3y.css';
import '../../css/s/s31f3r_ey.css';
import '../../css/x/xgwtkcfyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="subtask-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="an3xjeo3y"/><path class="s31f3r_ey"/><path class="xgwtkcfyj"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:subtask-outline"} {...others} />);
}

export default Component;
