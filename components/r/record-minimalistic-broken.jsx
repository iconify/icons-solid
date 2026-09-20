import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e6fsq3dmz.css';
import '../../css/e/es5c5ho5q.css';
import '../../css/y/yivdtj5uu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e6fsq3dmz"/><path class="es5c5ho5q"/><path class="yivdtj5uu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:record-minimalistic-broken"} {...others} />);
}

export default Component;
