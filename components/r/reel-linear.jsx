import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/p/pn2r-9bzq.css';
import '../../css/v/vsobki5ny.css';
import '../../css/n/n7swwqbdq.css';
import '../../css/f/flb5k9glp.css';
import '../../css/g/gjtfqlb3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="pn2r-9bzq"/><path class="vsobki5ny"/><path class="n7swwqbdq"/><path class="flb5k9glp"/><path class="gjtfqlb3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:reel-linear"} {...others} />);
}

export default Component;
