import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l58qa_ptf.css';
import '../../css/k/kbbipeb2c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="l58qa_ptf"/><path class="kbbipeb2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:subway"} {...others} />);
}

export default Component;
