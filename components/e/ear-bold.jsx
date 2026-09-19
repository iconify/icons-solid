import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__s2g6zp.css';
import '../../css/l/llk457frh.css';
import '../../css/f/fwjghpb0j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="a__s2g6zp"><path class="llk457frh"/><path class="fwjghpb0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ear-bold"} {...others} />);
}

export default Component;
