import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h18guyucc.css';
import '../../css/t/t2eh-yxwi.css';
import '../../css/g/gfgxpybux.css';
import '../../css/h/h-sspho8c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="h18guyucc"/><path class="t2eh-yxwi"/><path class="gfgxpybux"/><path class="h-sspho8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:camera-duo"} {...others} />);
}

export default Component;
