import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcpth-wqs.css';
import '../../css/p/pi7jdd7uf.css';
import '../../css/b/bzun-yi8p.css';
import '../../css/r/r9z5rgbmd.css';
import '../../css/s/s7fs97vwa.css';
import '../../css/a/a8bhycbwh.css';
import '../../css/n/np0dbccli.css';
import '../../css/s/sarygcwxn.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wcpth-wqs"/><path class="pi7jdd7uf"/><path class="bzun-yi8p"/><path class="r9z5rgbmd"/><path class="s7fs97vwa"/><path class="a8bhycbwh"/><path class="np0dbccli"/><path class="sarygcwxn"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-moldova"} {...others} />);
}

export default Component;
