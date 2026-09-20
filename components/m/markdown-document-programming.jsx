import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f51qmwf-q.css';
import '../../css/s/s8cwe32um.css';
import '../../css/b/bg033vbmv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="f51qmwf-q"/><path class="s8cwe32um"/><path class="bg033vbmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:markdown-document-programming"} {...others} />);
}

export default Component;
