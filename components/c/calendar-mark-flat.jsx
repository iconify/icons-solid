import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xk230irwd.css';
import '../../css/p/p_gbbybxh.css';
import '../../css/g/gi5y9nmlg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xk230irwd"/><path class="p_gbbybxh"/><path clip-rule="evenodd" class="gi5y9nmlg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:calendar-mark-flat"} {...others} />);
}

export default Component;
