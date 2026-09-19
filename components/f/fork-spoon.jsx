import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/opb5c-oie.css';
import '../../css/h/hqtmz8h1c.css';
import '../../css/i/iqzato_pz.css';
import '../../css/j/j67ab0pml.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="opb5c-oie"/><path class="hqtmz8h1c"/><path class="iqzato_pz"/><path class="j67ab0pml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:fork-spoon"} {...others} />);
}

export default Component;
