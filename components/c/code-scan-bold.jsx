import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_3psfbjy.css';
import '../../css/v/vtko2zsbn.css';
import '../../css/v/v74w5wbyh.css';
import '../../css/b/bbt2j9byd.css';
import '../../css/o/oc64p8blr.css';
import '../../css/n/nmke13z2i.css';
import '../../css/m/mrbd1vqmu.css';
import '../../css/l/l-i-4twyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="u_3psfbjy"/><path class="vtko2zsbn"/><path class="v74w5wbyh"/><path class="bbt2j9byd"/><path class="oc64p8blr"/><path class="nmke13z2i"/><path class="mrbd1vqmu"/><path class="l-i-4twyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-scan-bold"} {...others} />);
}

export default Component;
