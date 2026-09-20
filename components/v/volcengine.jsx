import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vfbzjfbdz.css';
import '../../css/q/qx5pn6bgp.css';
import '../../css/j/jr4g_1b6u.css';
import '../../css/h/h9ubalc1n.css';
import '../../css/h/hxey31b-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="vfbzjfbdz"/><path clip-rule="evenodd" class="qx5pn6bgp"/><path class="jr4g_1b6u"/><path clip-rule="evenodd" class="h9ubalc1n"/><path class="hxey31b-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:volcengine"} {...others} />);
}

export default Component;
