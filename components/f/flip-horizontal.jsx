import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f8d68ubjr.css';
import '../../css/j/jaqvtxnxo.css';
import '../../css/i/ii24yqw_c.css';
import '../../css/a/af81mcbod.css';
import '../../css/w/whigfibpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="f8d68ubjr wm-shadow"/><path class="jaqvtxnxo"/><path class="ii24yqw_c"/><path class="af81mcbod"/><path class="whigfibpk wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:flip-horizontal"} {...others} />);
}

export default Component;
