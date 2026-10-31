import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zo5dbxbqj.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/h/hk4_ptb-x.css';
import '../../css/m/m04i1k8ue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zo5dbxbqj"/><g class="mc2zb0bvp"><circle class="hk4_ptb-x"/><path class="m04i1k8ue"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:send-later"} {...others} />);
}

export default Component;
