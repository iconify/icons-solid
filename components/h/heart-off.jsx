import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj9v8ib9i.css';
import '../../css/m/m0x7zyogi.css';
import '../../css/w/wvgf-sy3j.css';
import '../../css/k/k9dn5vbxd.css';
import '../../css/n/nriizsb1o.css';
import '../../css/t/tui17ndid.css';
import '../../css/r/rwdaqabpf.css';
import '../../css/u/u86004bkb.css';
import '../../css/n/n2hlg7k7l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gj9v8ib9i wm-shadow"/><path class="m0x7zyogi wm-k"/><path class="wm-k wvgf-sy3j"/><path class="k9dn5vbxd wm-k"/><path class="nriizsb1o wm-k"/><path class="tui17ndid wm-k"/><path class="rwdaqabpf wm-shine"/><path class="u86004bkb wm-s"/><path class="n2hlg7k7l wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:heart-off"} {...others} />);
}

export default Component;
