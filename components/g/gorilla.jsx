import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgf35sqoj.css';
import '../../css/k/khxyncrbi.css';
import '../../css/k/ke9d-2l_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qgf35sqoj"/><path class="khxyncrbi"/><path class="ke9d-2l_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:gorilla"} {...others} />);
}

export default Component;
