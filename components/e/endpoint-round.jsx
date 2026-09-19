import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/p0ac-3b3y.css';
import '../../css/l/ly5956p2q.css';
import '../../css/r/rua3ltb1v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="p0ac-3b3y"/><circle class="ly5956p2q"/><path class="rua3ltb1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:endpoint-round"} {...others} />);
}

export default Component;
