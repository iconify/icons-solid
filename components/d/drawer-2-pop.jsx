import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qep26ubpg.css';
import '../../css/o/o7bshobas.css';
import '../../css/f/foo-7ub3y.css';
import '../../css/v/vu_lsacpr.css';
import '../../css/p/prd79pb5q.css';
import '../../css/k/km74x3opg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qep26ubpg"/><path class="o7bshobas"/><path class="foo-7ub3y"/><path class="vu_lsacpr"/><path class="prd79pb5q"/><path class="km74x3opg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:drawer-2-pop"} {...others} />);
}

export default Component;
