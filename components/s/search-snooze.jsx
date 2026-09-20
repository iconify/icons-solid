import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywsgt1bmd.css';
import '../../css/v/vlzselbkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ywsgt1bmd"/><path class="vlzselbkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:search-snooze"} {...others} />);
}

export default Component;
