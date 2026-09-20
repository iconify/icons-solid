import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqogompia.css';
import '../../css/x/xx8n1_bzj.css';
import '../../css/z/z04drlb1l.css';
import '../../css/p/p6bmezxmc.css';
import '../../css/p/p1dxmr8pc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="nqogompia"/><path class="xx8n1_bzj"/><g class="z04drlb1l"><path class="p6bmezxmc"/><path class="p1dxmr8pc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:speaker-low-volume"} {...others} />);
}

export default Component;
