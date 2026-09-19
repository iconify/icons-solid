import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dmbvvtk_o.css';
import '../../css/d/dt2hbi4nv.css';
import '../../css/s/sgvixgbsl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="dmbvvtk_o"/><path class="dt2hbi4nv"/><path class="sgvixgbsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sweater"} {...others} />);
}

export default Component;
