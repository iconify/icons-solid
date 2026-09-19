import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/em1eecbma.css';
import '../../css/k/ke0058byd.css';
import '../../css/l/l76rhnbaq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="em1eecbma"/><path class="ke0058byd"/><path class="l76rhnbaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:fingerprint"} {...others} />);
}

export default Component;
