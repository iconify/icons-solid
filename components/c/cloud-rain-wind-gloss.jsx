import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/be8nsg5dq.css';
import '../../css/q/qk11fvbsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="be8nsg5dq wm-k"/><path class="qk11fvbsl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-rain-wind-gloss"} {...others} />);
}

export default Component;
