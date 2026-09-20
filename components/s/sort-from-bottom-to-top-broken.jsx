import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lghfbwbad.css';
import '../../css/f/f_ilzosws.css';
import '../../css/l/lqfqjbb0r.css';
import '../../css/p/ppqxdzqbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lghfbwbad"/><path class="f_ilzosws"/><path class="lqfqjbb0r"/><path class="ppqxdzqbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-from-bottom-to-top-broken"} {...others} />);
}

export default Component;
