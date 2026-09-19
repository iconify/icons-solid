import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m35bpgbdz.css';
import '../../css/v/v696yfb0r.css';
import '../../css/m/mrxc-mb-s.css';
import '../../css/z/zdx0htb8r.css';
import '../../css/i/iy2rondas.css';
import '../../css/i/i_o8fhb6i.css';
import '../../css/u/uzaovqzzs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m35bpgbdz"/><path class="v696yfb0r"/><path class="mrxc-mb-s"/><path class="zdx0htb8r"/><circle class="iy2rondas"/><path class="i_o8fhb6i"/><path class="uzaovqzzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:documentwithpicture"} {...others} />);
}

export default Component;
