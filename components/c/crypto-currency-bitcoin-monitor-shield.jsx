import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/la84seb5a.css';
import '../../css/z/zynaom_lk.css';
import '../../css/h/ho6pl981a.css';
import '../../css/o/ofkb1rbyw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="la84seb5a"/><path class="zynaom_lk"/><path class="ho6pl981a"/><path class="ofkb1rbyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:crypto-currency-bitcoin-monitor-shield"} {...others} />);
}

export default Component;
