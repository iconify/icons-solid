import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/ws4ealbfy.css';
import '../../css/c/cf6nv0b6r.css';
import '../../css/x/xfwanmdbt.css';
import '../../css/w/wn32pbc3k.css';
import '../../css/d/d8acdnb8z.css';
import '../../css/i/i06bsnbxz.css';
import '../../css/a/a0ut89bpw.css';
import '../../css/u/u5gjqfbud.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ws4ealbfy"/><path class="cf6nv0b6r"/><path class="xfwanmdbt"/><path class="wn32pbc3k"/><path class="d8acdnb8z"/><path class="i06bsnbxz"/><path class="a0ut89bpw"/><path class="u5gjqfbud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cycle-movement"} {...others} />);
}

export default Component;
