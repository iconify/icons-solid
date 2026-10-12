import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx90d9eva.css';
import '../../css/z/zbraxxbpk.css';
import '../../css/f/f4zg2ubjr.css';
import '../../css/j/jf6tf2zuk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lx90d9eva"/><path class="zbraxxbpk"/><path class="f4zg2ubjr"/><path class="jf6tf2zuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-medal"} {...others} />);
}

export default Component;
