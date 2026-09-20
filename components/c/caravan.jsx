import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tjewimb5j.css';
import '../../css/g/gxekegbyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tjewimb5j"/><path class="gxekegbyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:caravan"} {...others} />);
}

export default Component;
