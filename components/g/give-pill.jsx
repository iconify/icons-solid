import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k-_s6p0pq.css';
import '../../css/u/utbxovsvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k-_s6p0pq"/><path class="utbxovsvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:give-pill"} {...others} />);
}

export default Component;
