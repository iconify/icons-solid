import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/myu9avgru.css';
import '../../css/u/umtr24biu.css';
import '../../css/s/sq84s46_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="myu9avgru"/><path class="umtr24biu"/><path class="sq84s46_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:thermometer"} {...others} />);
}

export default Component;
