import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dbcu5ybto.css';
import '../../css/i/ip1bi0joi.css';
import '../../css/h/hngbmnvfa.css';
import '../../css/q/qcys2db0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dbcu5ybto wm-k"/><path class="ip1bi0joi wm-a"/><path class="hngbmnvfa"/><path class="qcys2db0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:gift-stack"} {...others} />);
}

export default Component;
