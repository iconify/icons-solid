import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/o2k-usb0q.css';
import '../../css/d/d4fhygb2d.css';
import '../../css/t/te-g9bbsa.css';
import '../../css/x/x_b7gqbqv.css';
import '../../css/f/fye1ff7ya.css';
import '../../css/u/ulnr9lfjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="o2k-usb0q"/><path class="d4fhygb2d wm-s"/><path class="te-g9bbsa wm-shine"/><path class="wm-k x_b7gqbqv"/><path class="fye1ff7ya wm-a"/><path class="ulnr9lfjv wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:worried"} {...others} />);
}

export default Component;
