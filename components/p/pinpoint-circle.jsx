import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/h/hrdfs6bgt.css';
import '../../css/z/zxu0mhbsx.css';
import '../../css/j/jb1k8htek.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path class="hrdfs6bgt"/><path clip-rule="evenodd" class="zxu0mhbsx"/><path clip-rule="evenodd" class="jb1k8htek"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:pinpoint-circle"} {...others} />);
}

export default Component;
