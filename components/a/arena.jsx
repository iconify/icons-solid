import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3p1ybc1b.css';
import '../../css/x/xv7sj-rps.css';
import '../../css/k/kr-l0bcuh.css';
import '../../css/z/zk9uyabpu.css';
import '../../css/a/a9yn5fbeu.css';
import '../../css/c/can965bdx.css';
import '../../css/w/wljgiwvuo.css';
import '../../css/p/p6bngzbsh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="e3p1ybc1b"><path class="xv7sj-rps"/><path class="kr-l0bcuh"/><path class="zk9uyabpu"/><path class="a9yn5fbeu"/><path class="can965bdx"/><path class="wljgiwvuo"/><path class="p6bngzbsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:arena"} {...others} />);
}

export default Component;
