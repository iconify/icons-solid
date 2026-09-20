import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wpgd1nbzg.css';
import '../../css/v/v1e90jbgj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wpgd1nbzg"/><path class="v1e90jbgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:air-conditioner"} {...others} />);
}

export default Component;
