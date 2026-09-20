import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wf89k6buf.css';
import '../../css/o/ot4eah36m.css';
import '../../css/d/d0ubpwxhe.css';
import '../../css/z/zoy5yqq7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wf89k6buf"/><path class="ot4eah36m"/><path class="d0ubpwxhe"/><path class="zoy5yqq7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chart-square-2-line-duotone"} {...others} />);
}

export default Component;
