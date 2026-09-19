import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xh9z62bhv.css';
import '../../css/n/n0qaccbrc.css';
import '../../css/d/dfsxo8ehe.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xh9z62bhv"/><path class="n0qaccbrc"/><path class="dfsxo8ehe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crown-duo"} {...others} />);
}

export default Component;
