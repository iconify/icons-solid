import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pi85rhb3t.css';
import '../../css/t/t8srh3bsq.css';
import '../../css/b/btc70ibsp.css';
import '../../css/h/hu0hzbbeq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="pi85rhb3t"/><path class="t8srh3bsq"/><path class="btc70ibsp"/><path class="hu0hzbbeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:api"} {...others} />);
}

export default Component;
