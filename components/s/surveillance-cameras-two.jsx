import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sybgc7b4i.css';
import '../../css/c/cknlgy3-i.css';
import '../../css/r/riqeuzwro.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="sybgc7b4i"/><path class="cknlgy3-i"/><path class="riqeuzwro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:surveillance-cameras-two"} {...others} />);
}

export default Component;
