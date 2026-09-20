import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vlzselbkt.css';
import '../../css/w/w_86skbsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vlzselbkt"/><path class="w_86skbsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:search-dot"} {...others} />);
}

export default Component;
