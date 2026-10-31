import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i-bllxbpn.css';
import '../../css/n/npd51h74k.css';
import '../../css/k/k-rm_2xlq.css';
import '../../css/c/cw_dp9bfd.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="i-bllxbpn"/><path class="npd51h74k wm-shine"/><path class="k-rm_2xlq wm-k"/><path class="cw_dp9bfd wm-a"/><path class="w49ngccqq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:star-half"} {...others} />);
}

export default Component;
