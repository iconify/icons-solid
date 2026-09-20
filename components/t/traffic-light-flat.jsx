import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kqms4i_wt.css';
import '../../css/c/c0a5exbxy.css';
import '../../css/u/uy4d6vb7v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="kqms4i_wt"/><path class="c0a5exbxy"/><path class="uy4d6vb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:traffic-light-flat"} {...others} />);
}

export default Component;
