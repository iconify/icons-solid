import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i80u9hb9r.css';
import '../../css/g/gs0aqykii.css';

const viewBox = {"width":1547,"height":2503};
const content = `<path class="i80u9hb9r"/><path class="gs0aqykii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dassault-aviation-light"} {...others} />);
}

export default Component;
