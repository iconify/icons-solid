import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vpxhribda.css';
import '../../css/w/w3bp2bcky.css';
import '../../css/u/un6ecob_e.css';
import '../../css/q/qccfeuj6n.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="vpxhribda"/><path class="w3bp2bcky"/><path class="un6ecob_e"/><path class="qccfeuj6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:club-outline"} {...others} />);
}

export default Component;
