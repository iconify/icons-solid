import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/y/ypevy37ax.css';
import '../../css/y/yl24h3bju.css';
import '../../css/g/gok9fi5zv.css';
import '../../css/x/xhc9nz3zu.css';
import '../../css/n/n6h96tkgl.css';
import '../../css/f/f7yeuk0sv.css';
import '../../css/k/kyrvby2wy.css';
import '../../css/v/vqsqe1a3u.css';
import '../../css/x/x-hr9ybxt.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="ypevy37ax"/><path class="yl24h3bju"/><path class="gok9fi5zv"/><path class="xhc9nz3zu"/><path class="n6h96tkgl"/><path class="f7yeuk0sv"/><path class="kyrvby2wy"/><path class="vqsqe1a3u"/><path class="x-hr9ybxt"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-montserrat"} {...others} />);
}

export default Component;
