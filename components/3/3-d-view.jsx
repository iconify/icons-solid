import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/rw9dcsb8a.css';
import '../../css/z/zv8av_7po.css';
import '../../css/k/kqv4krtmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="rw9dcsb8a"/><path class="zv8av_7po"/><path class="kqv4krtmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:3-d-view"} {...others} />);
}

export default Component;
