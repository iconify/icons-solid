import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hgyr1h5yj.css';
import '../../css/x/x8wodkbrz.css';
import '../../css/w/wve1_ubeu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hgyr1h5yj"/><path class="x8wodkbrz"/><path class="wve1_ubeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:chair"} {...others} />);
}

export default Component;
