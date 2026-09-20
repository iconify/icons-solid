import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kfzcnbb6p.css';
import '../../css/r/rm94l1jha.css';
import '../../css/k/k2e-prbdi.css';
import '../../css/q/qd4ogl5wu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kfzcnbb6p"/><rect transform="matrix(-1 0 0 -1 24 24)" class="rm94l1jha"/><circle class="k2e-prbdi"/><circle class="qd4ogl5wu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:window-chart-line"} {...others} />);
}

export default Component;
