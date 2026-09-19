import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/c1v5zsbsb.css';
import '../../css/x/x3id_abbj.css';
import '../../css/z/z9i26abnc.css';
import '../../css/m/mioa6bryd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="c1v5zsbsb"/><rect class="x3id_abbj"/><path class="z9i26abnc"/><path class="mioa6bryd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:network-drive"} {...others} />);
}

export default Component;
