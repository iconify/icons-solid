import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qx9a5vb2t.css';
import '../../css/m/mbdj0e04q.css';
import '../../css/j/jqrvh3_gi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="qx9a5vb2t"/><path class="mbdj0e04q"/><path class="jqrvh3_gi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:trash"} {...others} />);
}

export default Component;
