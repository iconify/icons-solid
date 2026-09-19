import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/e/euce6ob-r.css';
import '../../css/p/pv2ur-63o.css';
import '../../css/u/u2u13nb8g.css';
import '../../css/u/ux7uuvb5n.css';
import '../../css/h/h9e2q342z.css';
import '../../css/i/i07zhpywo.css';
import '../../css/e/eydybcbai.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="euce6ob-r"/><path class="pv2ur-63o"/><path class="u2u13nb8g"/><path class="ux7uuvb5n"/><path class="h9e2q342z"/><path class="i07zhpywo"/><path class="eydybcbai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-hiding"} {...others} />);
}

export default Component;
