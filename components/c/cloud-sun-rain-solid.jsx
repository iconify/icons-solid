import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xxlh0q_3s.css';
import '../../css/q/q3tb4jbhj.css';
import '../../css/n/nyughr31e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="xxlh0q_3s"/><path class="q3tb4jbhj wm-a"/><path class="nyughr31e wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-sun-rain-solid"} {...others} />);
}

export default Component;
