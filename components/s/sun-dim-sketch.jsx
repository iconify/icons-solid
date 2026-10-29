import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/db4y25bpl.css';
import '../../css/w/ws80tf5yb.css';
import '../../css/r/rpdqoma1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="db4y25bpl"/><path class="wm-k ws80tf5yb"/><path class="rpdqoma1e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sun-dim-sketch"} {...others} />);
}

export default Component;
