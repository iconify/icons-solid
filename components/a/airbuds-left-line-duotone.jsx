import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ubwfpy16r.css';
import '../../css/e/e-jucopue.css';
import '../../css/g/gydr5xzud.css';
import '../../css/a/a_mtj062n.css';
import '../../css/s/sllw21b5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ubwfpy16r"/><path class="e-jucopue"/><circle transform="matrix(-1 0 0 1 21 11)" class="gydr5xzud"/><path class="a_mtj062n"/><path class="sllw21b5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-left-line-duotone"} {...others} />);
}

export default Component;
