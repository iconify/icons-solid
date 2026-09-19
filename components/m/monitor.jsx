import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/t/ttjl0ecfp.css';
import '../../css/v/vce1w3ven.css';
import '../../css/v/vlsgay-ha.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="ttjl0ecfp"/><path clip-rule="evenodd" class="vce1w3ven"/><path class="vlsgay-ha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:monitor"} {...others} />);
}

export default Component;
