import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/far_cdbom.css';
import '../../css/v/vmzs2cilw.css';
import '../../css/r/rfghtubvr.css';

const viewBox = {"width":512,"height":512};
const content = `<rect transform="rotate(-45 312.002 311.994)" class="far_cdbom"/><path class="vmzs2cilw"/><path class="rfghtubvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:color-wand-outline"} {...others} />);
}

export default Component;
