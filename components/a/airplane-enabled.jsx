import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lxc9w6ber.css';
import '../../css/p/pz7kdm_1c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="lxc9w6ber"/><path class="pz7kdm_1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:airplane-enabled"} {...others} />);
}

export default Component;
