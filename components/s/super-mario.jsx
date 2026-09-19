import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vdl_oacln.css';
import '../../css/a/a21aejbzt.css';
import '../../css/d/dkiuhbb3a.css';
import '../../css/o/ol4634bna.css';
import '../../css/o/oqwhjwboa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vdl_oacln"/><path class="a21aejbzt"/><path class="dkiuhbb3a"/><path class="ol4634bna"/><path class="oqwhjwboa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:super-mario"} {...others} />);
}

export default Component;
