import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrk4-orkz.css';
import '../../css/u/u15giqb2e.css';
import '../../css/q/qryzuxmyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yrk4-orkz"/><path class="u15giqb2e"/><path class="qryzuxmyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:money-roll-bold-duotone"} {...others} />);
}

export default Component;
