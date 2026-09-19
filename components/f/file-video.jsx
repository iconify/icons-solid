import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/g665e95jg.css';
import '../../css/o/o4orebb1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="g665e95jg"/><path class="o4orebb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-video"} {...others} />);
}

export default Component;
