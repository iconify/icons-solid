import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0xeprbjv.css';
import '../../css/a/auktzvbmh.css';
import '../../css/n/n5h-832ud.css';
import '../../css/l/ljgu2vbxj.css';
import '../../css/g/g_d3x7m3t.css';
import '../../css/e/epfrg3bgj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="b0xeprbjv"/><path class="auktzvbmh"/><path class="n5h-832ud"/><path clip-rule="evenodd" class="ljgu2vbxj"/><path clip-rule="evenodd" class="g_d3x7m3t"/><path class="epfrg3bgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:government-building-1-flat"} {...others} />);
}

export default Component;
