import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/y/y0r_bqb0y.css';
import '../../css/p/pamz0ebce.css';
import '../../css/t/t_lxoibsf.css';
import '../../css/d/dfxbr7wll.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><rect class="y0r_bqb0y"/><path class="pamz0ebce"/><path class="t_lxoibsf"/><path class="dfxbr7wll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:agreement"} {...others} />);
}

export default Component;
