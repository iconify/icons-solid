import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lavlmcboo.css';
import '../../css/j/j1xmf4brh.css';
import '../../css/q/qi9j2kb_h.css';
import '../../css/u/u54fhq1jf.css';
import '../../css/v/v4q59rc0r.css';
import '../../css/x/x259zs6yo.css';
import '../../css/o/oux-pmgds.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="lavlmcboo"/><path class="j1xmf4brh"/><path class="qi9j2kb_h"/><path class="u54fhq1jf"/><path class="v4q59rc0r"/><path class="x259zs6yo"/><path class="oux-pmgds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:pencil-ruler-2-duo"} {...others} />);
}

export default Component;
