import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a_c1rcbiz.css';
import '../../css/v/veervxb0f.css';
import '../../css/c/cp26zrbra.css';
import '../../css/x/x_b7gqbqv.css';
import '../../css/f/fye1ff7ya.css';
import '../../css/u/ulnr9lfjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="a_c1rcbiz wm-k"/><path class="veervxb0f wm-s"/><path class="cp26zrbra wm-shadow"/><path class="wm-k x_b7gqbqv"/><path class="fye1ff7ya wm-a"/><path class="ulnr9lfjv wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:worried-engrave"} {...others} />);
}

export default Component;
