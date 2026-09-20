import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tvn6ntdsb.css';
import '../../css/y/ybzbxbbqr.css';
import '../../css/g/gd5-rmb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tvn6ntdsb"/><path class="ybzbxbbqr"/><path class="gd5-rmb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:microphone-off"} {...others} />);
}

export default Component;
