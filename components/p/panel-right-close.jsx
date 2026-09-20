import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r1rsykbad.css';
import '../../css/w/wjltsrbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r1rsykbad"/><path class="wjltsrbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:panel-right-close"} {...others} />);
}

export default Component;
