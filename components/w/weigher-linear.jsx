import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r-do9_buf.css';
import '../../css/h/hwifnpb2v.css';
import '../../css/h/hlgy2abxo.css';
import '../../css/w/w0k93jy7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r-do9_buf"/><path class="hwifnpb2v"/><path class="hlgy2abxo"/><path class="w0k93jy7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:weigher-linear"} {...others} />);
}

export default Component;
