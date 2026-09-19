import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bva61xs7d.css';
import '../../css/k/kay6ejznq.css';
import '../../css/o/ob0sf-chj.css';
import '../../css/l/l16uqqbgk.css';
import '../../css/x/xx4xdjbdq.css';
import '../../css/c/cjb2v54hb.css';
import '../../css/b/barx9jajj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bva61xs7d"/><path class="kay6ejznq"/><path clip-rule="evenodd" class="ob0sf-chj"/><path class="l16uqqbgk"/><path class="xx4xdjbdq"/><path class="cjb2v54hb"/><path class="barx9jajj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:sunset"} {...others} />);
}

export default Component;
