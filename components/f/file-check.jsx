import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/g9mt46brz.css';
import '../../css/w/wkzkt0pke.css';
import '../../css/x/xd0veabmf.css';
import '../../css/n/n3jvmegul.css';
import '../../css/r/rwa00dbjg.css';
import '../../css/p/p6l5ibb_p.css';
import '../../css/y/ycbaglbot.css';
import '../../css/y/ys8_m0b1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="g9mt46brz"/><path class="wkzkt0pke"/><path class="wm-shine xd0veabmf"/><path class="n3jvmegul wm-k"/><path class="rwa00dbjg wm-a"/><path class="p6l5ibb_p"/><path class="ycbaglbot"/><path class="wm-shine ys8_m0b1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:file-check"} {...others} />);
}

export default Component;
