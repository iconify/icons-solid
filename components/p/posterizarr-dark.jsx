import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0dmoy_jy.css';
import '../../css/z/zpx94h-bl.css';
import '../../css/y/yiook0b5l.css';
import '../../css/i/io-vn9b5p.css';
import '../../css/s/swdohebjr.css';
import '../../css/z/zqdwlbpai.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f0dmoy_jy"/><path class="zpx94h-bl"/><path class="yiook0b5l"/><path class="io-vn9b5p"/><path class="swdohebjr"/><path class="zqdwlbpai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:posterizarr-dark"} {...others} />);
}

export default Component;
