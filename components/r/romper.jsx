import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hfcnj25dk.css';
import '../../css/r/rg113dddb.css';
import '../../css/k/kj-k9st5r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hfcnj25dk"/><path class="rg113dddb"/><path class="kj-k9st5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:romper"} {...others} />);
}

export default Component;
