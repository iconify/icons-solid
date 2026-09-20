import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/may6j7bcq.css';
import '../../css/z/zekeeybuw.css';
import '../../css/w/wt24lwkxm.css';
import '../../css/p/p-klt_bmt.css';
import '../../css/w/wd4eggh4i.css';
import '../../css/l/leyqgkb7k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="may6j7bcq"/><path class="zekeeybuw"/><path class="wt24lwkxm"/><path class="p-klt_bmt"/><path class="wd4eggh4i"/><path class="leyqgkb7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:transparent"} {...others} />);
}

export default Component;
