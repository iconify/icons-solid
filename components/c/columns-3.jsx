import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gvys7u6cq.css';
import '../../css/x/xasz54-bm.css';
import '../../css/k/kjkbr1xrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="gvys7u6cq"/><path class="xasz54-bm"/><path class="kjkbr1xrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:columns-3"} {...others} />);
}

export default Component;
