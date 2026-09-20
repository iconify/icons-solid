import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mqtg_nbsi.css';
import '../../css/p/pwz0xh32h.css';
import '../../css/c/ch3uuungx.css';
import '../../css/l/lewhcjbdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mqtg_nbsi"/><path class="pwz0xh32h"/><path class="ch3uuungx"/><path class="lewhcjbdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chart-2-bold"} {...others} />);
}

export default Component;
