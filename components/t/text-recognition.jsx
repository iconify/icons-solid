import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/e7cmgmb8y.css';
import '../../css/c/coix3hblc.css';
import '../../css/w/wcox72b7e.css';
import '../../css/h/hgr1_-bpg.css';
import '../../css/i/i8be06b-g.css';
import '../../css/h/had51l7mf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="e7cmgmb8y"/><path class="coix3hblc"/><path class="wcox72b7e"/><path class="hgr1_-bpg"/><path class="i8be06b-g"/><path class="had51l7mf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:text-recognition"} {...others} />);
}

export default Component;
