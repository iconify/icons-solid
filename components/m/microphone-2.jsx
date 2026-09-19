import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qe7ab_bae.css';
import '../../css/w/w78shdcew.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="qe7ab_bae"/><path class="w78shdcew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:microphone-2"} {...others} />);
}

export default Component;
