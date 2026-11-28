import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ku2_wbb0m.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d7nao396p.css';
import '../../css/t/tpn0zmmcy.css';
import '../../css/i/irbzclbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ku2_wbb0m secondary"/><g class="dt0cm9dhy primary"><path class="d7nao396p"/><path class="tpn0zmmcy"/><path class="irbzclbwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shuffle-sparkles-duo"} {...others} />);
}

export default Component;
