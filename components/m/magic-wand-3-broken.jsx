import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/w/w7f1knbar.css';
import '../../css/v/vbhtlsbwa.css';
import '../../css/q/qtktxacxl.css';
import '../../css/p/ptzle3bnr.css';
import '../../css/k/k2hspqbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="w7f1knbar"/><path class="vbhtlsbwa"/><path class="qtktxacxl"/><path class="ptzle3bnr"/><path class="k2hspqbiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magic-wand-3-broken"} {...others} />);
}

export default Component;
