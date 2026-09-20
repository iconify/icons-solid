import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vs6yzbcpk.css';
import '../../css/i/iwp99bchi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="vs6yzbcpk"/><path class="iwp99bchi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:mail"} {...others} />);
}

export default Component;
