import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q_dqh-oxk.css';
import '../../css/z/z_tx0113m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="q_dqh-oxk wm-k"/><path class="wm-a z_tx0113m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:snowman-gloss"} {...others} />);
}

export default Component;
