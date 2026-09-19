import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uzrocibyu.css';
import '../../css/c/c6am73bhf.css';
import '../../css/g/g42dkccnc.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="uzrocibyu"/><path clip-rule="evenodd" class="c6am73bhf"/><path clip-rule="evenodd" class="g42dkccnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:pinpoint-print"} {...others} />);
}

export default Component;
