import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sok5cxb0n.css';
import '../../css/n/nzdyrns-l.css';
import '../../css/x/xjrqukbum.css';
import '../../css/v/va25inbmk.css';
import '../../css/r/r5i-inbdw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="sok5cxb0n"/><path class="nzdyrns-l"/><path class="xjrqukbum"/><rect class="va25inbmk"/><rect class="r5i-inbdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:castle"} {...others} />);
}

export default Component;
