import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ofzf_qwrd.css';
import '../../css/i/i-nadtq-k.css';
import '../../css/f/fd8p9ibgw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ofzf_qwrd"/><path clip-rule="evenodd" class="i-nadtq-k"/><path class="fd8p9ibgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:tennis-ball"} {...others} />);
}

export default Component;
