import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzlgly3ke.css';
import '../../css/q/qrhmcj17p.css';
import '../../css/i/i-dn492le.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="zzlgly3ke"><path class="qrhmcj17p"/><path class="i-dn492le"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:vigo"} {...others} />);
}

export default Component;
