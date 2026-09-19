import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wz1rvsomz.css';
import '../../css/u/uvef5qbta.css';
import '../../css/k/kbe-t1bmz.css';
import '../../css/k/k4qo1xe9v.css';
import '../../css/y/yrbdzwe0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="wz1rvsomz"/><path class="uvef5qbta"/><path class="kbe-t1bmz"/><path class="k4qo1xe9v"/><path class="yrbdzwe0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bus-01"} {...others} />);
}

export default Component;
