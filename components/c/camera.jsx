import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p2_ifvwys.css';
import '../../css/m/mv6y8gbvn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p2_ifvwys"/><path class="mv6y8gbvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:camera"} {...others} />);
}

export default Component;
