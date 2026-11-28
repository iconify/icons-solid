import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5-8z3bpv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qkob93buz.css';
import '../../css/k/kwu0e7-kt.css';
import '../../css/w/wkiiqlbnc.css';
import '../../css/g/gsn-xsbdg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c5-8z3bpv secondary"/><g class="dt0cm9dhy primary"><path class="qkob93buz"/><path class="kwu0e7-kt"/><path class="wkiiqlbnc"/><path class="gsn-xsbdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-tree-duo"} {...others} />);
}

export default Component;
