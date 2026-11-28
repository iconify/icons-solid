import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcni6qbqh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lvd82jv5z.css';
import '../../css/t/t92y3z_3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qcni6qbqh secondary"/><g class="dt0cm9dhy primary"><path class="lvd82jv5z"/><path class="t92y3z_3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:fish-duo"} {...others} />);
}

export default Component;
