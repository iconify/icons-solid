import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/f/fsan3yarc.css';
import '../../css/x/xoh-v2bac.css';
import '../../css/d/d3d1cnb2j.css';
import '../../css/r/rgkpd4izd.css';
import '../../css/u/u2i66ifye.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="xhdah4bbl"/><rect class="fsan3yarc"/><path class="xoh-v2bac"/><path class="d3d1cnb2j"/><path class="rgkpd4izd"/><path class="u2i66ifye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:view-grid-detail"} {...others} />);
}

export default Component;
