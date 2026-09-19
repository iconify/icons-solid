import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g_dqx5jha.css';
import '../../css/y/yej4bsv4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g_dqx5jha"/><path class="yej4bsv4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-radical"} {...others} />);
}

export default Component;
