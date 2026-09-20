import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/twqn-pbok.css';
import '../../css/a/am9di6ifv.css';
import '../../css/b/bc0ka3bck.css';
import '../../css/z/z3wrk5hbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="twqn-pbok"/><path class="am9di6ifv"/><path class="bc0ka3bck"/><path class="z3wrk5hbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:usb-flash-drive"} {...others} />);
}

export default Component;
