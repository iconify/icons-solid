import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j929nbbke.css';
import '../../css/f/fr4f2zb0s.css';
import '../../css/t/tenorv3_c.css';
import '../../css/b/burcdbbrh.css';
import '../../css/b/bxf25d9iz.css';
import '../../css/w/wu_f0wbsp.css';
import '../../css/t/tzfmsmdtd.css';
import '../../css/j/jl3wb9ebb.css';
import '../../css/u/uq26v2_qt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j929nbbke"/><path class="fr4f2zb0s"/><path class="tenorv3_c"/><path class="burcdbbrh"/><path class="bxf25d9iz"/><path class="wu_f0wbsp"/><path class="tzfmsmdtd"/><path class="jl3wb9ebb"/><path class="uq26v2_qt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:multiple-users-2"} {...others} />);
}

export default Component;
