import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tzqslwopi.css';
import '../../css/s/suo_r-a_q.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="tzqslwopi"/><path class="suo_r-a_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box-arrow-right"} {...others} />);
}

export default Component;
