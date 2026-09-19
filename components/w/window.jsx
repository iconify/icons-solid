import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_wvbn4-s.css';
import '../../css/b/bfe2smrhu.css';
import '../../css/x/xbdrabtly.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="p_wvbn4-s"><path class="bfe2smrhu"/><path class="xbdrabtly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:window"} {...others} />);
}

export default Component;
