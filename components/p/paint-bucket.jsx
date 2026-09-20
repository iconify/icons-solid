import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/ueui13bly.css';
import '../../css/d/dotp_lcwf.css';
import '../../css/e/ewnktgm_c.css';
import '../../css/f/fxuxdpbto.css';
import '../../css/t/tmv_7fbjr.css';
import '../../css/z/zjtfa5btv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ueui13bly"/><path class="dotp_lcwf"/><path class="ewnktgm_c"/><path class="fxuxdpbto"/><path class="tmv_7fbjr"/><path class="zjtfa5btv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:paint-bucket"} {...others} />);
}

export default Component;
