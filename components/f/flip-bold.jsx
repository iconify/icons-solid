import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u4tbqsblh.css';
import '../../css/i/ikozek9sr.css';
import '../../css/e/et_5w2bcu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="u4tbqsblh"/><path class="ikozek9sr"/><path class="et_5w2bcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:flip-bold"} {...others} />);
}

export default Component;
