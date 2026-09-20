import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/o/ot4eah36m.css';
import '../../css/d/d0ubpwxhe.css';
import '../../css/z/zoy5yqq7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="ot4eah36m"/><path class="d0ubpwxhe"/><path class="zoy5yqq7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chart-square-2-linear"} {...others} />);
}

export default Component;
