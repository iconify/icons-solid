import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/aqgyq7lga.css';
import '../../css/y/y_f4_bbgw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="aqgyq7lga"/><path class="y_f4_bbgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:palace"} {...others} />);
}

export default Component;
