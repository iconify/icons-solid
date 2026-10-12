import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7u62kbpc.css';
import '../../css/x/x9d8yiw5q.css';
import '../../css/n/ndqmjehdm.css';
import '../../css/g/gjkl8e8oi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w7u62kbpc"/><path class="x9d8yiw5q"/><path class="ndqmjehdm"/><path class="gjkl8e8oi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-pdf"} {...others} />);
}

export default Component;
