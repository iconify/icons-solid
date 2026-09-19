import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxtbo4bxi.css';
import '../../css/a/aiuo1vbpf.css';
import '../../css/z/zt1admbyb.css';
import '../../css/b/bg-lr7b_t.css';
import '../../css/o/o6_gnwbeb.css';
import '../../css/w/w046ky6mr.css';
import '../../css/d/dmnr9xbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rxtbo4bxi"/><circle class="aiuo1vbpf"/><circle class="zt1admbyb"/><circle class="bg-lr7b_t"/><path class="o6_gnwbeb"/><circle class="w046ky6mr"/><path class="dmnr9xbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:network-tiers"} {...others} />);
}

export default Component;
