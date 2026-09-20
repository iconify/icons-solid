import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mp50wybee.css';
import '../../css/v/vr7ga571i.css';
import '../../css/b/b141zczxk.css';
import '../../css/n/n2tk16bue.css';
import '../../css/o/ocbzd93hl.css';
import '../../css/x/xlpjvwn2v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="mp50wybee"/><path class="vr7ga571i"/><path class="b141zczxk"/><path class="n2tk16bue"/><path class="ocbzd93hl"/><path class="xlpjvwn2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:apartment-2-duo"} {...others} />);
}

export default Component;
