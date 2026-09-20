import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hff3ylbdd.css';
import '../../css/m/muz_oiskg.css';
import '../../css/k/ksfyjdpxr.css';
import '../../css/c/c7_0e0ves.css';
import '../../css/x/xzbc91r6y.css';
import '../../css/y/y3th5y7wh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="hff3ylbdd"/><path class="muz_oiskg"/><path class="ksfyjdpxr"/><path class="c7_0e0ves"/><path class="xzbc91r6y"/><path class="y3th5y7wh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:arrow-cursor-move"} {...others} />);
}

export default Component;
