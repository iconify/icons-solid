import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/i72f4jbac.css';
import '../../css/a/abtri_fkx.css';
import '../../css/s/sfy1x5b8o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="i72f4jbac"/><path class="abtri_fkx"/><path class="sfy1x5b8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:lipstick"} {...others} />);
}

export default Component;
