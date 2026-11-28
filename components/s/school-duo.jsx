import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvj861bmj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/djmx-ybly.css';
import '../../css/l/lussumstn.css';
import '../../css/y/yrsmw3jhw.css';
import '../../css/t/tgej6jbmt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fvj861bmj secondary"/><g class="dt0cm9dhy primary"><path class="djmx-ybly"/><path class="lussumstn"/><path class="yrsmw3jhw"/><path class="tgej6jbmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:school-duo"} {...others} />);
}

export default Component;
