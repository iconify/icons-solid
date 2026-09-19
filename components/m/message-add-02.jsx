import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hwepoubwy.css';
import '../../css/d/dfa1vk68q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hwepoubwy"/><path class="dfa1vk68q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-add-02"} {...others} />);
}

export default Component;
