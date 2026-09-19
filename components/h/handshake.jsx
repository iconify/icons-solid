import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjkz51bte.css';
import '../../css/f/frxzbs3kt.css';
import '../../css/p/physebcia.css';
import '../../css/j/jpmksn3nn.css';
import '../../css/x/x_8e9fb8y.css';
import '../../css/t/tden80b8r.css';
import '../../css/w/wqx_5e8xb.css';
import '../../css/n/ne8pbfm0q.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="pjkz51bte"/><path class="frxzbs3kt"/><path class="physebcia"/><path class="jpmksn3nn"/><path class="x_8e9fb8y"/><path class="tden80b8r"/><path class="wqx_5e8xb"/><path class="ne8pbfm0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:handshake"} {...others} />);
}

export default Component;
