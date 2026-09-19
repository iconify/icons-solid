import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/on2p_wi5n.css';
import '../../css/v/v3y-9vz7f.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="on2p_wi5n"/><path clip-rule="evenodd" class="v3y-9vz7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:rolling-eyes-bold"} {...others} />);
}

export default Component;
