import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c0sdi7f7k.css';
import '../../css/e/et8h5kbcp.css';
import '../../css/f/fafyxccxn.css';
import '../../css/h/h3z_zgaej.css';
import '../../css/k/khnzb1bpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="c0sdi7f7k wm-shadow"/><path class="et8h5kbcp wm-shadow"/><path class="fafyxccxn"/><path class="h3z_zgaej"/><path class="khnzb1bpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:briefcase"} {...others} />);
}

export default Component;
