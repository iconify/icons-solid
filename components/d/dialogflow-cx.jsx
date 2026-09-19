import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqipk5huk.css';
import '../../css/w/wh59mdnkx.css';
import '../../css/x/xq7fcdc_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yqipk5huk"/><path class="wh59mdnkx"/><path class="xq7fcdc_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:dialogflow-cx"} {...others} />);
}

export default Component;
