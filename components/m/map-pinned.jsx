import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d-76f3e8z.css';
import '../../css/w/wf79gda8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d-76f3e8z"/><path class="wf79gda8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:map-pinned"} {...others} />);
}

export default Component;
