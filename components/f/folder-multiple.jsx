import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/gryrq_gjn.css';
import '../../css/l/l-jt8nbfd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="gryrq_gjn"/><path class="l-jt8nbfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:folder-multiple"} {...others} />);
}

export default Component;
