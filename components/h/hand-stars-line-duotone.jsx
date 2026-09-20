import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xwggvq01q.css';
import '../../css/z/zkkdtubov.css';
import '../../css/t/twucrwbct.css';
import '../../css/a/aw7yywbhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xwggvq01q"/><path class="zkkdtubov"/><path class="twucrwbct"/><path class="aw7yywbhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-stars-line-duotone"} {...others} />);
}

export default Component;
