import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ruc4o2mkn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u36ur-bsi.css';
import '../../css/z/zeh6lmwln.css';
import '../../css/g/gw6wo7jcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ruc4o2mkn secondary"/><g class="dt0cm9dhy primary"><path class="u36ur-bsi"/><path class="zeh6lmwln"/><path class="gw6wo7jcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:salt-duo"} {...others} />);
}

export default Component;
