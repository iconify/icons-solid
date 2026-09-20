import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uhl62ksrv.css';
import '../../css/g/ggmqvab_j.css';
import '../../css/x/xo8kc-b9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uhl62ksrv"/><path class="ggmqvab_j"/><path class="xo8kc-b9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:drawer-image"} {...others} />);
}

export default Component;
