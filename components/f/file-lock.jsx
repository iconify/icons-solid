import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/scd6web9s.css';
import '../../css/y/yon5glqlr.css';
import '../../css/w/wnjg72bgx.css';
import '../../css/n/nfkzo2tfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="scd6web9s"/><path class="yon5glqlr"/><path class="wnjg72bgx"/><path class="nfkzo2tfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-lock"} {...others} />);
}

export default Component;
