import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/neownrw5s.css';
import '../../css/y/ye5ddfjfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="neownrw5s"/><path class="ye5ddfjfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-cancel-02"} {...others} />);
}

export default Component;
