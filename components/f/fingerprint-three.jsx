import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/i70egobdq.css';
import '../../css/c/csw_8r-nn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="i70egobdq"/><path class="csw_8r-nn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:fingerprint-three"} {...others} />);
}

export default Component;
