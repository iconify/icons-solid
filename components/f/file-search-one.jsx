import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/ftpkt8zyt.css';
import '../../css/v/vv_m7luxt.css';
import '../../css/h/hlbprpbiu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ftpkt8zyt"/><circle class="vv_m7luxt"/><path class="hlbprpbiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:file-search-one"} {...others} />);
}

export default Component;
