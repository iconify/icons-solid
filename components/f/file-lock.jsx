import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ir69hccrk.css';
import '../../css/n/ni12qcbed.css';
import '../../css/z/zpzo9obiz.css';
import '../../css/n/nfkzo2tfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ir69hccrk"/><path class="ni12qcbed"/><path class="zpzo9obiz"/><path class="nfkzo2tfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-lock"} {...others} />);
}

export default Component;
