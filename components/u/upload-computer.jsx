import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/knt8s46qx.css';
import '../../css/r/rgpfwjbgz.css';
import '../../css/p/p8o016kgn.css';
import '../../css/r/roa0wac0r.css';
import '../../css/d/dflemqbwa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="knt8s46qx"/><path class="rgpfwjbgz"/><path class="p8o016kgn"/><path class="roa0wac0r"/><path class="dflemqbwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:upload-computer"} {...others} />);
}

export default Component;
