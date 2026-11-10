import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iqvr-4btw.css';
import '../../css/n/n6fcs2bwg.css';
import '../../css/a/am5binbrc.css';
import '../../css/x/xvulmum9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="iqvr-4btw"/><path class="n6fcs2bwg"/><path class="am5binbrc"/><path class="xvulmum9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:music-notes-square"} {...others} />);
}

export default Component;
