import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c1-gge6vc.css';
import '../../css/n/nt0n0fb6x.css';
import '../../css/w/wxwl6_qzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="c1-gge6vc"/><path class="nt0n0fb6x wm-a"/><path class="wxwl6_qzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-circle-question-duo"} {...others} />);
}

export default Component;
