import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/undzao_xq.css';
import '../../css/t/tm_fh2w2u.css';
import '../../css/j/jviy2sb4z.css';
import '../../css/u/uooj9_soa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="undzao_xq"/><path class="tm_fh2w2u wm-shine"/><path class="jviy2sb4z"/><path class="uooj9_soa wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:avatar-dino"} {...others} />);
}

export default Component;
