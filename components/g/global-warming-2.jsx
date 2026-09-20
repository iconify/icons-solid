import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/ormk-3biq.css';
import '../../css/b/bvdzb2bxn.css';
import '../../css/m/myf7gab5q.css';
import '../../css/k/k9c6ambvj.css';
import '../../css/n/nxiiiq5sw.css';
import '../../css/o/oi5vytbzt.css';
import '../../css/o/ortsad2ap.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ormk-3biq"/><path class="bvdzb2bxn"/><path class="myf7gab5q"/><path class="k9c6ambvj"/><path class="nxiiiq5sw"/><path class="oi5vytbzt"/><path class="ortsad2ap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:global-warming-2"} {...others} />);
}

export default Component;
