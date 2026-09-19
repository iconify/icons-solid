import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__s2g6zp.css';
import '../../css/q/qkfiy8b3d.css';
import '../../css/n/ni8n24f5q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="a__s2g6zp"><path class="qkfiy8b3d"/><path class="ni8n24f5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shovel-bold"} {...others} />);
}

export default Component;
