import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x9_21w3fw.css';
import '../../css/k/kk-764bgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="x9_21w3fw"/><path class="kk-764bgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:trend-up-thin"} {...others} />);
}

export default Component;
