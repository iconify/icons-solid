import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qoya0mr_a.css';
import '../../css/x/xnodzworh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="qoya0mr_a wm-k"/><path class="wm-s xnodzworh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-off-gloss"} {...others} />);
}

export default Component;
