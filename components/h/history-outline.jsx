import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ef8pwpb6n.css';
import '../../css/s/sleouwb3s.css';
import '../../css/w/w-asugb8r.css';
import '../../css/e/elikaogpc.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ef8pwpb6n"/><path class="sleouwb3s"/><path class="w-asugb8r"/><path class="elikaogpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:history-outline"} {...others} />);
}

export default Component;
