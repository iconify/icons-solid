import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mtezw7m5k.css';
import '../../css/v/vlzselbkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mtezw7m5k"/><path class="vlzselbkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:search-check"} {...others} />);
}

export default Component;
