import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/tzzoh_b1t.css';
import '../../css/y/yu7ul0sdx.css';
import '../../css/s/siba6g8kr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="tzzoh_b1t"/><path class="yu7ul0sdx"/><path class="siba6g8kr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:champagne-party-alcohol"} {...others} />);
}

export default Component;
