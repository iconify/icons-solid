import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nrnj23b2p.css';
import '../../css/d/dyh94_bpj.css';
import '../../css/y/ydy2iebrd.css';
import '../../css/i/imvbfud-d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nrnj23b2p"/><path clip-rule="evenodd" class="dyh94_bpj"/><path class="ydy2iebrd"/><path clip-rule="evenodd" class="imvbfud-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:synergist-insecticide-bioassays-outline"} {...others} />);
}

export default Component;
