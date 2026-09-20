import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/el5krsbzi.css';
import '../../css/r/r_xmipeoc.css';
import '../../css/i/i23tqphhu.css';
import '../../css/e/edxstybzy.css';
import '../../css/o/or-k32bku.css';

const viewBox = {"width":512,"height":512};
const content = `<g transform="translate(0 -161.533)" class="el5krsbzi"><path class="r_xmipeoc"/><path class="i23tqphhu"/><circle class="edxstybzy"/><circle class="or-k32bku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:glaxnimate"} {...others} />);
}

export default Component;
