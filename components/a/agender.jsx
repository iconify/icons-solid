import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8wglebks.css';
import '../../css/t/tgnqpxbwy.css';
import '../../css/q/q0n3d1ixw.css';
import '../../css/v/vq3igbbjb.css';
import '../../css/m/m14nlbb-x.css';
import '../../css/k/kwgr5lb5a.css';
import '../../css/q/q4tv7lw_g.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="t8wglebks"/><path class="tgnqpxbwy"/><path class="q0n3d1ixw"/><path class="vq3igbbjb"/><path class="m14nlbb-x"/><path class="kwgr5lb5a"/><path class="q4tv7lw_g"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:agender"} {...others} />);
}

export default Component;
