import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/t/tepmsuqjt.css';
import '../../css/v/vk4obhbwh.css';
import '../../css/v/vj8wfz_3y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="tepmsuqjt"/><path class="vk4obhbwh"/><path class="vj8wfz_3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:presentation"} {...others} />);
}

export default Component;
