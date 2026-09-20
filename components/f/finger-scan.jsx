import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hkzeubbqo.css';
import '../../css/q/qkx_1d5id.css';
import '../../css/j/j5ec80dni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hkzeubbqo"/><path class="qkx_1d5id"/><path class="j5ec80dni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:finger-scan"} {...others} />);
}

export default Component;
