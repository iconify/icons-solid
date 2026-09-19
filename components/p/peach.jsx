import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/k/kbgg_hbee.css';
import '../../css/i/iq54a65ws.css';
import '../../css/d/dy54p4boo.css';
import '../../css/q/q_79hbbls.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="kbgg_hbee"/><path class="iq54a65ws"/><path class="dy54p4boo"/><path class="q_79hbbls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:peach"} {...others} />);
}

export default Component;
