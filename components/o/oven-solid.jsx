import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h7pvhhbbp.css';
import '../../css/v/v6_d7lb8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="h7pvhhbbp"/><path class="v6_d7lb8o wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:oven-solid"} {...others} />);
}

export default Component;
