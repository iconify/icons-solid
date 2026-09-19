import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7xu_txfb.css';
import '../../css/t/tchbkabdf.css';
import '../../css/x/xkzrit3ld.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="q7xu_txfb"/><path class="tchbkabdf"/><path class="xkzrit3ld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:keyboard-duo"} {...others} />);
}

export default Component;
