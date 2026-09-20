import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/elns7ebwh.css';
import '../../css/w/w-_t-lb4p.css';
import '../../css/l/l_1wr2zvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="elns7ebwh"/><rect class="w-_t-lb4p"/><rect class="l_1wr2zvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:bar-graph"} {...others} />);
}

export default Component;
