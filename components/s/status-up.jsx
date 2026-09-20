import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cdyu3tbss.css';
import '../../css/f/fdwcfrbsd.css';
import '../../css/k/kvqd6bcxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cdyu3tbss"/><path class="fdwcfrbsd"/><path class="kvqd6bcxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:status-up"} {...others} />);
}

export default Component;
