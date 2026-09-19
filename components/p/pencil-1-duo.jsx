import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ilt41gdzy.css';
import '../../css/h/ho8201-pa.css';
import '../../css/f/flrxrstck.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ilt41gdzy"/><path class="ho8201-pa"/><path class="flrxrstck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pencil-1-duo"} {...others} />);
}

export default Component;
