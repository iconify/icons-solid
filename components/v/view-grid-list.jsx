import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/f/fsan3yarc.css';
import '../../css/x/xbrl61bjm.css';
import '../../css/i/ij9ahfbvg.css';
import '../../css/p/psrkgsbww.css';
import '../../css/x/xoh-v2bac.css';
import '../../css/d/d3d1cnb2j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="xhdah4bbl"/><rect class="fsan3yarc"/><rect class="xbrl61bjm"/><path class="ij9ahfbvg"/><path class="psrkgsbww"/><path class="xoh-v2bac"/><path class="d3d1cnb2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:view-grid-list"} {...others} />);
}

export default Component;
