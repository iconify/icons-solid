import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ubwfpy16r.css';
import '../../css/m/ms74kbcwg.css';
import '../../css/i/iuccl_bxa.css';
import '../../css/a/a_mtj062n.css';
import '../../css/l/lcrq5obob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ubwfpy16r"/><path class="ms74kbcwg"/><circle transform="matrix(-1 0 0 1 21 11)" class="iuccl_bxa"/><path class="a_mtj062n"/><path class="lcrq5obob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-left-linear"} {...others} />);
}

export default Component;
