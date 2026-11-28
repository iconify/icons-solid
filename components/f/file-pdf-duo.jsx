import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ul1do2bru.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cmwiddbxv.css';
import '../../css/h/hji4qyb_f.css';
import '../../css/u/ufm4c-buh.css';
import '../../css/r/rlf1jguyc.css';
import '../../css/v/vqln7qj6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary ul1do2bru"/><g class="dt0cm9dhy primary"><path class="cmwiddbxv"/><path class="hji4qyb_f"/><path class="ufm4c-buh"/><path class="rlf1jguyc"/><path class="vqln7qj6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-pdf-duo"} {...others} />);
}

export default Component;
