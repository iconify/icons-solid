import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lyrti13om.css';
import '../../css/l/li28uobpr.css';
import '../../css/b/br4tncc9u.css';
import '../../css/k/k1i-mjptc.css';
import '../../css/l/lvpuuh5tp.css';
import '../../css/t/tadxr3bsh.css';
import '../../css/v/v4871xbbd.css';
import '../../css/j/j8a_e1rdq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="lyrti13om"/><path class="li28uobpr"/><path class="br4tncc9u"/><path class="k1i-mjptc"/><path class="lvpuuh5tp"/><path class="tadxr3bsh"/><path class="v4871xbbd"/><path class="j8a_e1rdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:manual-wheelchair"} {...others} />);
}

export default Component;
