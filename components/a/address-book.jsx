import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vdpoyrbwh.css';
import '../../css/x/xg4l-ovkk.css';
import '../../css/i/iru-mbbdf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="vdpoyrbwh"/><circle class="xg4l-ovkk"/><path class="iru-mbbdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:address-book"} {...others} />);
}

export default Component;
