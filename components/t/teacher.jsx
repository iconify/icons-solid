import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wn1njabfl.css';
import '../../css/d/dq4ii8q4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wn1njabfl"/><path class="dq4ii8q4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:teacher"} {...others} />);
}

export default Component;
