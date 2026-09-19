import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dgy_fyb5q.css';
import '../../css/w/w8dlq76op.css';
import '../../css/c/cqcg--4ji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dgy_fyb5q"/><path class="w8dlq76op"/><path class="cqcg--4ji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:justice-scale-01"} {...others} />);
}

export default Component;
