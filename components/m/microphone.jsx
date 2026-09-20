import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/runbfzsjp.css';
import '../../css/x/xprloubds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="runbfzsjp"/><path class="xprloubds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:microphone"} {...others} />);
}

export default Component;
