import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nphq31ziy.css';
import '../../css/x/xqs6_qbaj.css';
import '../../css/y/y050835xc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="nphq31ziy"/><path class="xqs6_qbaj"/><path class="y050835xc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tiger-zodiac"} {...others} />);
}

export default Component;
