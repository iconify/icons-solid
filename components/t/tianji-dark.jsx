import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/je-85d3pw.css';
import '../../css/q/qk-0cxbgu.css';
import '../../css/y/yybz8gcza.css';
import '../../css/s/s74z5lbrc.css';
import '../../css/j/jp8k7rlvc.css';
import '../../css/n/nra37d0ug.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="ft5dv1b6b"><rect class="je-85d3pw"/><path class="qk-0cxbgu"/><path class="yybz8gcza"/><path class="s74z5lbrc"/><path class="jp8k7rlvc"/><path class="nra37d0ug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tianji-dark"} {...others} />);
}

export default Component;
