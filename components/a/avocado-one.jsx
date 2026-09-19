import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tia2wlril.css';
import '../../css/z/z5rcj_bcz.css';
import '../../css/w/whcbbl0vz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="tia2wlril"/><path class="z5rcj_bcz"/><path class="whcbbl0vz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:avocado-one"} {...others} />);
}

export default Component;
