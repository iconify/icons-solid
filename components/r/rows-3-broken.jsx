import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/keqt0zbld.css';
import '../../css/w/wip28lbxr.css';
import '../../css/e/e51bh2g-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="keqt0zbld"/><path class="wip28lbxr"/><path class="e51bh2g-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rows-3-broken"} {...others} />);
}

export default Component;
