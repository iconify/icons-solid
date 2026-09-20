import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/le3r5qgra.css';
import '../../css/g/gjo1tztxm.css';
import '../../css/u/uqhik9b3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="le3r5qgra"/><path class="gjo1tztxm"/><path class="uqhik9b3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:history-3-linear"} {...others} />);
}

export default Component;
