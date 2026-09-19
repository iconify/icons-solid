import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/os_gat7-a.css';
import '../../css/h/hnkvvsgay.css';
import '../../css/c/cew92he_y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="os_gat7-a"/><path class="hnkvvsgay"/><path class="cew92he_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:take-off"} {...others} />);
}

export default Component;
