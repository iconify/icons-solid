import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8wglebks.css';
import '../../css/n/nw_hxdnmh.css';
import '../../css/l/llv864bwp.css';
import '../../css/n/n1er_qyhi.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="t8wglebks"/><path class="nw_hxdnmh"/><path class="llv864bwp"/><path class="n1er_qyhi"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:nonbinary"} {...others} />);
}

export default Component;
