import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/iyg5_ubmc.css';
import '../../css/d/d1ny5kbfu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="iyg5_ubmc"/><path class="d1ny5kbfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pay-code-one"} {...others} />);
}

export default Component;
