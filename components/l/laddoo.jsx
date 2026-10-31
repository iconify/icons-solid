import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kgultr7in.css';
import '../../css/n/n4dw0zbba.css';
import '../../css/f/f4jxf6bws.css';
import '../../css/w/w_59zc09x.css';
import '../../css/n/nrhd71bhf.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kgultr7in"/><path class="n4dw0zbba"/><path class="f4jxf6bws wm-shine"/><path class="w_59zc09x wm-k"/><path class="nrhd71bhf wm-a"/><path class="w49ngccqq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:laddoo"} {...others} />);
}

export default Component;
