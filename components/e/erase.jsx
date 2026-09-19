import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qu89jbbtn.css';
import '../../css/s/sl25f3bsr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="qu89jbbtn"/><path class="sl25f3bsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:erase"} {...others} />);
}

export default Component;
