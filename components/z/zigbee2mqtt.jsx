import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l974u_srj.css';
import '../../css/h/hh0j4fnrz.css';
import '../../css/d/dtdwuqdfr.css';
import '../../css/n/n_f6npbzw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l974u_srj"/><path class="hh0j4fnrz"/><path class="dtdwuqdfr"/><path class="n_f6npbzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:zigbee2mqtt"} {...others} />);
}

export default Component;
