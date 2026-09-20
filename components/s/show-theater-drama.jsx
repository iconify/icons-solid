import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z7td259qz.css';
import '../../css/m/mncdzymto.css';
import '../../css/g/gnbqwj8kq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z7td259qz"/><path class="mncdzymto"/><path class="gnbqwj8kq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:show-theater-drama"} {...others} />);
}

export default Component;
