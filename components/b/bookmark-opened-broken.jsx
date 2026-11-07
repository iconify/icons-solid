import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f5hn4upfu.css';
import '../../css/n/nkncs4b1r.css';
import '../../css/o/ollsq1blz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f5hn4upfu"/><path class="nkncs4b1r"/><path class="ollsq1blz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-opened-broken"} {...others} />);
}

export default Component;
