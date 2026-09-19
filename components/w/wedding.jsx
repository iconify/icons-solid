import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l8c-d__iy.css';
import '../../css/r/r35d-sbgn.css';
import '../../css/k/k173jie9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><circle class="l8c-d__iy"/><circle class="r35d-sbgn"/><path class="k173jie9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wedding"} {...others} />);
}

export default Component;
