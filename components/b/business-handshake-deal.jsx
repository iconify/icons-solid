import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/az6pvjqpc.css';
import '../../css/v/vhxrlobrc.css';
import '../../css/d/dg7x3waqv.css';
import '../../css/j/j1q88ibrs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="az6pvjqpc"/><path class="vhxrlobrc"/><path class="dg7x3waqv"/><path class="j1q88ibrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:business-handshake-deal"} {...others} />);
}

export default Component;
