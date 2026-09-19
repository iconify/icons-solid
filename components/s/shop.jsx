import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fagbf2b8f.css';
import '../../css/x/x0yq8fapu.css';
import '../../css/r/r1o46bcgn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="fagbf2b8f"/><path class="x0yq8fapu"/><path class="r1o46bcgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:shop"} {...others} />);
}

export default Component;
