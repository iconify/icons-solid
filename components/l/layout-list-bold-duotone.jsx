import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpt8o4b1z.css';
import '../../css/z/zs0elrbfp.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/qnl0yuzbt.css';
import '../../css/o/o7jevlg6h.css';
import '../../css/d/di8dn3bsc.css';
import '../../css/p/p21w-1bfy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qpt8o4b1z"/><path class="zs0elrbfp"/><g class="xtpeb-edw"><path class="qnl0yuzbt"/><path class="o7jevlg6h"/><path class="di8dn3bsc"/><path class="p21w-1bfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layout-list-bold-duotone"} {...others} />);
}

export default Component;
