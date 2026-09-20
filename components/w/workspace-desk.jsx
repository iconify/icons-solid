import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q57ppbcla.css';
import '../../css/t/thtf9wqbd.css';
import '../../css/l/ls4bc2ban.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="q57ppbcla"/><path class="thtf9wqbd"/><path class="ls4bc2ban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:workspace-desk"} {...others} />);
}

export default Component;
