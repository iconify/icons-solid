import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/geju8gabu.css';
import '../../css/c/ccdrcabtz.css';
import '../../css/d/dgbqpihnp.css';
import '../../css/r/raqta9bwc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path clip-rule="evenodd" class="geju8gabu"/><path class="ccdrcabtz"/><path clip-rule="evenodd" class="dgbqpihnp"/><path class="raqta9bwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:earth"} {...others} />);
}

export default Component;
