import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rq2b7gb3u.css';
import '../../css/p/p6alplcuh.css';
import '../../css/x/xgprosbgt.css';
import '../../css/e/ekbh0_yws.css';
import '../../css/x/xv59mui2v.css';
import '../../css/f/f-u28vbfb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rq2b7gb3u"/><path clip-rule="evenodd" class="p6alplcuh"/><path class="xgprosbgt"/><path class="ekbh0_yws"/><path class="xv59mui2v"/><path class="f-u28vbfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-2-outline"} {...others} />);
}

export default Component;
