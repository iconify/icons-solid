import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jx7qrbcvx.css';
import '../../css/e/eipbxpbtj.css';
import '../../css/p/pb4v8bbjy.css';
import '../../css/s/szgmrm0gt.css';
import '../../css/o/opqd96b4u.css';
import '../../css/f/fw_og4k-h.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jx7qrbcvx"/><path class="eipbxpbtj"/><path class="pb4v8bbjy"/><path class="szgmrm0gt"/><path class="opqd96b4u"/><path class="fw_og4k-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:poodle"} {...others} />);
}

export default Component;
