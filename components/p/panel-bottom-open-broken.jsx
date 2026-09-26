import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l6nfp076h.css';
import '../../css/d/d4_j1ps6w.css';
import '../../css/g/gep1q1bhk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l6nfp076h"/><path class="d4_j1ps6w"/><path class="gep1q1bhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-bottom-open-broken"} {...others} />);
}

export default Component;
