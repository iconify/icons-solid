import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qd4_61bdr.css';
import '../../css/n/ny0-f6z0o.css';
import '../../css/g/gmkyp99tb.css';
import '../../css/a/agc8y1l_a.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="qd4_61bdr"/><path class="ny0-f6z0o"/><path class="gmkyp99tb"/><path class="agc8y1l_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:subway-outline"} {...others} />);
}

export default Component;
