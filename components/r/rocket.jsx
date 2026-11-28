import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kfg8fgbje.css';
import '../../css/t/t6ixtdb-q.css';
import '../../css/m/m_gtut9ud.css';
import '../../css/v/vn_1gcisw.css';
import '../../css/k/kb16w7ywp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kfg8fgbje"/><path class="t6ixtdb-q"/><path class="m_gtut9ud"/><path class="vn_1gcisw"/><path class="kb16w7ywp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:rocket"} {...others} />);
}

export default Component;
