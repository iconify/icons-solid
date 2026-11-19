import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekk465_ba.css';
import '../../css/x/xj2yxnv2q.css';
import '../../css/j/j45xv0bsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ekk465_ba"/><path class="xj2yxnv2q"/><path clip-rule="evenodd" class="j45xv0bsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:list-reload"} {...others} />);
}

export default Component;
