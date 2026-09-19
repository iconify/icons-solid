import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/beiar3v7q.css';
import '../../css/m/mqazv_0vr.css';
import '../../css/p/pp2bascsc.css';
import '../../css/b/byrg7evin.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="beiar3v7q"/><path class="mqazv_0vr"/><path class="pp2bascsc"/><path class="byrg7evin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:stop-hand-outline"} {...others} />);
}

export default Component;
