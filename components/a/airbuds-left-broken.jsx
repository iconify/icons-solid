import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtd3uwwop.css';
import '../../css/m/ms74kbcwg.css';
import '../../css/f/f7hcbzbgn.css';
import '../../css/a/a_mtj062n.css';
import '../../css/l/lcrq5obob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dtd3uwwop"/><path class="ms74kbcwg"/><path class="f7hcbzbgn"/><path class="a_mtj062n"/><path class="lcrq5obob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-left-broken"} {...others} />);
}

export default Component;
