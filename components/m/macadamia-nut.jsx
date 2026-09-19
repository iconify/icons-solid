import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vfyzo6bny.css';
import '../../css/r/r22h40bsk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="vfyzo6bny"/><path class="r22h40bsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:macadamia-nut"} {...others} />);
}

export default Component;
