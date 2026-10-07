import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vbs26_9cw.css';
import '../../css/n/njywq6b0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vbs26_9cw"/><path class="njywq6b0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:redo"} {...others} />);
}

export default Component;
