import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/sepbreh4q.css';
import '../../css/p/poxrhjbuj.css';
import '../../css/m/m_ib5tbyo.css';
import '../../css/o/o7pf0ubkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="sepbreh4q"/><path class="poxrhjbuj"/><path class="m_ib5tbyo"/><path class="o7pf0ubkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:user-add-plus"} {...others} />);
}

export default Component;
