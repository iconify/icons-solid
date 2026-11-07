import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wmjvdk1am.css';
import '../../css/o/o9x3zwbmh.css';
import '../../css/k/kkl8u6b3m.css';
import '../../css/e/ex1ol26-y.css';
import '../../css/j/jtwl_zhjq.css';
import '../../css/i/i4dcgmbin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wmjvdk1am"/><path class="o9x3zwbmh"/><path class="kkl8u6b3m"/><path class="ex1ol26-y"/><path class="jtwl_zhjq"/><path class="i4dcgmbin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-zip-broken"} {...others} />);
}

export default Component;
