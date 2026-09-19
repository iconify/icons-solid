import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/j/jil8u0uzb.css';
import '../../css/n/nqemzqbpt.css';
import '../../css/i/ihpy4gg5e.css';
import '../../css/u/uobxvhb2f.css';
import '../../css/i/i0ak2nvgn.css';
import '../../css/n/n48t-zgdb.css';
import '../../css/k/ks7gfgbtn.css';
import '../../css/m/m8xc6pc8n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="jil8u0uzb"/><path class="nqemzqbpt"/><path class="ihpy4gg5e"/><path class="uobxvhb2f"/><path class="i0ak2nvgn"/><path class="n48t-zgdb"/><path class="ks7gfgbtn"/><rect class="m8xc6pc8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:museum-two"} {...others} />);
}

export default Component;
