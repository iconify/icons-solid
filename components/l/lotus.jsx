import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dxeb_oimn.css';
import '../../css/t/tvvrxbc0k.css';
import '../../css/j/j5lsn12so.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="dxeb_oimn"/><path class="tvvrxbc0k"/><path class="j5lsn12so"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:lotus"} {...others} />);
}

export default Component;
