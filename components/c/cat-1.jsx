import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/atn8qkutt.css';
import '../../css/p/pkljy7kqs.css';
import '../../css/r/r3x5x1hrf.css';
import '../../css/n/nwesrpb3r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="atn8qkutt"/><path class="pkljy7kqs"/><path class="r3x5x1hrf"/><path class="nwesrpb3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cat-1"} {...others} />);
}

export default Component;
