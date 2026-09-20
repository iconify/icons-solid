import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ooarlb5qr.css';
import '../../css/x/xowi8cc5r.css';
import '../../css/w/wffo46blx.css';
import '../../css/x/xqy-0rbii.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ooarlb5qr"/><path class="xowi8cc5r"/><path class="wffo46blx"/><path class="xqy-0rbii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:adobe"} {...others} />);
}

export default Component;
