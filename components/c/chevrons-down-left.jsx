import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zh7y14b-f.css';
import '../../css/f/f9j0u2bli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zh7y14b-f"/><path class="f9j0u2bli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chevrons-down-left"} {...others} />);
}

export default Component;
