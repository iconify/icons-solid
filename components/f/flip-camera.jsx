import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xl-dk0l-y.css';
import '../../css/t/tm9f74uep.css';
import '../../css/i/igbkoxb2y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="xl-dk0l-y"/><circle class="tm9f74uep"/><path class="igbkoxb2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:flip-camera"} {...others} />);
}

export default Component;
