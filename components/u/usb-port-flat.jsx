import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnxi2rbnm.css';
import '../../css/r/rb73n4rtg.css';
import '../../css/i/i6b6yqb7b.css';
import '../../css/a/a1345gbdw.css';
import '../../css/w/wmlchccxy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wnxi2rbnm"><path clip-rule="evenodd" class="rb73n4rtg"/><path clip-rule="evenodd" class="i6b6yqb7b"/><path clip-rule="evenodd" class="a1345gbdw"/><path class="wmlchccxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:usb-port-flat"} {...others} />);
}

export default Component;
