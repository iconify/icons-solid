import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wd7mivbxy.css';
import '../../css/l/lhbc-ebvp.css';
import '../../css/k/kq34-c6zf.css';
import '../../css/f/fyq3xsbem.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wd7mivbxy"/><path class="lhbc-ebvp"/><path class="kq34-c6zf"/><path class="fyq3xsbem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:music-basket"} {...others} />);
}

export default Component;
