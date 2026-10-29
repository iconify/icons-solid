import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/ft6d_gblz.css';
import '../../css/b/bjf85qb1h.css';
import '../../css/y/y_gbgacre.css';
import '../../css/w/wa21ymbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ft6d_gblz"/><path class="bjf85qb1h wm-k"/><path class="wm-k y_gbgacre"/><path class="wa21ymbkm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:save-sketch"} {...others} />);
}

export default Component;
