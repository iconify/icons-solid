import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ys-mc835o.css';
import '../../css/f/fqloeq7pt.css';
import '../../css/u/u5srzu_od.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ys-mc835o"/><path class="fqloeq7pt"/><path class="u5srzu_od"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-receive-flow-01"} {...others} />);
}

export default Component;
