import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wp5ooaczn.css';
import '../../css/x/xjcsx6bzc.css';
import '../../css/z/zd1_n8zte.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wp5ooaczn"/><path class="xjcsx6bzc"/><path class="zd1_n8zte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-rotate-2-bold"} {...others} />);
}

export default Component;
