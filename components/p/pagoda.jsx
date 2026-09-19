import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/u/uhquvqblt.css';
import '../../css/z/zle9okbqi.css';
import '../../css/q/q8cu2q4fj.css';
import '../../css/w/w9p-wt1mv.css';
import '../../css/b/bk5824yee.css';
import '../../css/f/fxf3x6-dk.css';
import '../../css/t/thdmlaces.css';
import '../../css/u/uxt_6q9tb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="uhquvqblt"/><path class="zle9okbqi"/><path class="q8cu2q4fj"/><path class="w9p-wt1mv"/><path class="bk5824yee"/><path class="fxf3x6-dk"/><path class="thdmlaces"/><path class="uxt_6q9tb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pagoda"} {...others} />);
}

export default Component;
