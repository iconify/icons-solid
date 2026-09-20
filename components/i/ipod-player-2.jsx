import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mdb__fbra.css';
import '../../css/o/ojp1nyjbt.css';
import '../../css/l/lc77s8s9j.css';
import '../../css/g/g4wz3nbyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="mdb__fbra"/><path class="ojp1nyjbt"/><path class="lc77s8s9j"/><path class="g4wz3nbyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:ipod-player-2"} {...others} />);
}

export default Component;
