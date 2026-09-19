import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/i1g5zgq6a.css';
import '../../css/v/vq5_c3q6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="i1g5zgq6a"/><path class="vq5_c3q6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rewind"} {...others} />);
}

export default Component;
