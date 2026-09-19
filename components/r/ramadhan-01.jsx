import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/spmweu7ol.css';
import '../../css/s/syex7907e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="spmweu7ol"/><path class="syex7907e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ramadhan-01"} {...others} />);
}

export default Component;
