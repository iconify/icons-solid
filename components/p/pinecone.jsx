import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pni0gvbny.css';
import '../../css/x/xp16_pb1c.css';
import '../../css/q/q4wbkvbqy.css';

const viewBox = {"width":1077,"height":220};
const content = `<g class="pni0gvbny"><path class="xp16_pb1c"/><path clip-rule="evenodd" class="q4wbkvbqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pinecone"} {...others} />);
}

export default Component;
