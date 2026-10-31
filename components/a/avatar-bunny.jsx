import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hw9f4-b5q.css';
import '../../css/i/i_c_2xb_w.css';
import '../../css/q/q_x48ltld.css';
import '../../css/n/nse0b34fk.css';
import '../../css/y/yt3gx6m5l.css';
import '../../css/d/djde97n3k.css';
import '../../css/u/ugzrm7bka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="hw9f4-b5q"/><path class="i_c_2xb_w"/><path class="q_x48ltld"/><path class="nse0b34fk wm-shine"/><path class="wm-k yt3gx6m5l"/><path class="djde97n3k wm-a"/><path class="ugzrm7bka wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-bunny"} {...others} />);
}

export default Component;
