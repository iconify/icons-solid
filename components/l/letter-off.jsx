import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2zqp8bfe.css';
import '../../css/c/cfav8mbcf.css';
import '../../css/n/nlzzwd22p.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><rect class="n2zqp8bfe"/><path clip-rule="evenodd" class="cfav8mbcf"/><path clip-rule="evenodd" class="nlzzwd22p"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:letter-off"} {...others} />);
}

export default Component;
