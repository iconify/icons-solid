import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vk93x0f7t.css';
import '../../css/i/i554-4bpa.css';
import '../../css/j/jj8-yh4_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vk93x0f7t"/><path class="i554-4bpa"/><path class="jj8-yh4_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:healthcare"} {...others} />);
}

export default Component;
