import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c2083vbts.css';
import '../../css/w/w13l2qbgr.css';
import '../../css/i/iak6gdcqz.css';
import '../../css/a/aute6acvy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c2083vbts"/><path class="w13l2qbgr"/><path class="iak6gdcqz"/><path class="aute6acvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:whatsapp"} {...others} />);
}

export default Component;
