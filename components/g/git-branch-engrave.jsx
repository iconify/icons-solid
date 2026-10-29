import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/spbyornbc.css';
import '../../css/p/pvi2rebjf.css';
import '../../css/c/ce-slac7d.css';
import '../../css/l/l7jhf3bei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="spbyornbc"/><path class="pvi2rebjf wm-shadow"/><path class="ce-slac7d"/><path class="l7jhf3bei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-branch-engrave"} {...others} />);
}

export default Component;
