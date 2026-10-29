import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckx-wsbvw.css';
import '../../css/w/w9ya8ujxr.css';
import '../../css/f/fp9r1800m.css';
import '../../css/v/v1vdeibtz.css';
import '../../css/h/hwxdcp12d.css';
import '../../css/c/c4nz-hb8k.css';
import '../../css/g/gel8yybrq.css';
import '../../css/e/e4f8nfb2i.css';
import '../../css/l/lpic8rzfs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ckx-wsbvw wm-shadow"/><path class="w9ya8ujxr wm-k"/><path class="fp9r1800m wm-k"/><path class="v1vdeibtz wm-k"/><path class="hwxdcp12d wm-k"/><path class="c4nz-hb8k wm-k"/><path class="gel8yybrq wm-shine"/><path class="e4f8nfb2i wm-a"/><path class="lpic8rzfs wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:download"} {...others} />);
}

export default Component;
