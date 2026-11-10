import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/t4k53fbtz.css';
import '../../css/i/ihek4ssmd.css';
import '../../css/w/wr8ro6bkc.css';
import '../../css/u/u7sddvbwu.css';
import '../../css/g/gzxh5wyzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="t4k53fbtz"/><path class="ihek4ssmd"/><path class="wr8ro6bkc"/><path class="u7sddvbwu"/><path class="gzxh5wyzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:paw-print"} {...others} />);
}

export default Component;
