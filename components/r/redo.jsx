import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i1s0wx79o.css';
import '../../css/h/h5ru2tbbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i1s0wx79o"/><path class="h5ru2tbbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:redo"} {...others} />);
}

export default Component;
