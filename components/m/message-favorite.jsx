import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mgp-8ebvh.css';
import '../../css/j/j8tzfdcno.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mgp-8ebvh"/><path class="j8tzfdcno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:message-favorite"} {...others} />);
}

export default Component;
