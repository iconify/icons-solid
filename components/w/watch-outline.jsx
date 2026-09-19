import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q2p1-kb8b.css';
import '../../css/h/hbn7adl-e.css';
import '../../css/i/ibft8obap.css';
import '../../css/h/hpuq-ubde.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="q2p1-kb8b"/><path class="hbn7adl-e"/><path class="ibft8obap"/><path class="hpuq-ubde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:watch-outline"} {...others} />);
}

export default Component;
