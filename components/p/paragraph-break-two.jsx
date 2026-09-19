import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/uz6ay7bdz.css';
import '../../css/k/kqsxotboh.css';
import '../../css/x/xafv2hbwi.css';
import '../../css/i/inncdbcjd.css';
import '../../css/r/r9px-6bfr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="uz6ay7bdz"/><path class="kqsxotboh"/><path class="xafv2hbwi"/><path class="inncdbcjd"/><path class="r9px-6bfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:paragraph-break-two"} {...others} />);
}

export default Component;
