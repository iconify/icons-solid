import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/os9rpcbyr.css';
import '../../css/e/epr13ccau.css';
import '../../css/o/oicq10bvy.css';
import '../../css/g/g1imbdb_c.css';
import '../../css/p/p01bj4wck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="os9rpcbyr"/><path class="epr13ccau"/><path class="oicq10bvy"/><path class="g1imbdb_c"/><path class="p01bj4wck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:location-pin-direction-3"} {...others} />);
}

export default Component;
