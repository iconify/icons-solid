import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xqm10ubez.css';
import '../../css/f/fpnj5kbqo.css';
import '../../css/d/dec_aybzw.css';
import '../../css/e/e73kn4beu.css';
import '../../css/e/ezzv083_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xqm10ubez"/><path class="fpnj5kbqo wm-k"/><path class="dec_aybzw wm-k"/><path class="e73kn4beu wm-a"/><path class="ezzv083_y wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-cog-sketch"} {...others} />);
}

export default Component;
