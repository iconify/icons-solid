import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kf73t6z_t.css';
import '../../css/d/dh32hrbil.css';
import '../../css/s/szo1qpbst.css';
import '../../css/r/rbd70loxo.css';
import '../../css/z/z5pfo_ber.css';
import '../../css/a/a7s9jdlcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kf73t6z_t"/><path class="dh32hrbil"/><path class="szo1qpbst wm-shine"/><path class="rbd70loxo wm-k"/><path class="wm-a z5pfo_ber"/><path class="a7s9jdlcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cloud-snow"} {...others} />);
}

export default Component;
