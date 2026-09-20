import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/z/zrko9r9qa.css';
import '../../css/v/vesi9niup.css';
import '../../css/w/w9jsdsb8y.css';
import '../../css/a/a59r3ek-x.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="zrko9r9qa"/><path clip-rule="evenodd" class="vesi9niup"/></g><path class="w9jsdsb8y"/><path clip-rule="evenodd" class="a59r3ek-x"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:list-off"} {...others} />);
}

export default Component;
