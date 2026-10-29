import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jisnqccwm.css';
import '../../css/c/crumyuhlq.css';
import '../../css/e/ezzstpbxg.css';
import '../../css/m/mrpjhzbvf.css';
import '../../css/e/e1kj5y_ub.css';
import '../../css/z/zn3w76bgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jisnqccwm wm-k"/><path class="crumyuhlq wm-a"/><path class="ezzstpbxg wm-shadow"/><path class="mrpjhzbvf wm-k"/><path class="e1kj5y_ub wm-a"/><path class="wm-a zn3w76bgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-graph-engrave"} {...others} />);
}

export default Component;
