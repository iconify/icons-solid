import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cb03pibjf.css';
import '../../css/v/vv3m6lbyb.css';
import '../../css/y/yqghi_b_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cb03pibjf"/><path class="vv3m6lbyb"/><path class="yqghi_b_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimize-square-3-linear"} {...others} />);
}

export default Component;
