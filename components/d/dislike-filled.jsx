import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dwfge_h7v.css';
import '../../css/x/x54t9obpz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dwfge_h7v"/><path class="x54t9obpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dislike-filled"} {...others} />);
}

export default Component;
