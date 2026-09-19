import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c543isbeu.css';
import '../../css/h/hkuwvwbvi.css';
import '../../css/y/ysq3he5vq.css';
import '../../css/s/sj6rcj4hn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="c543isbeu"/><path class="hkuwvwbvi"/><path class="ysq3he5vq"/><path class="sj6rcj4hn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:peoples"} {...others} />);
}

export default Component;
