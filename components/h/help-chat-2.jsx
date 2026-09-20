import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kp4ebdcxj.css';
import '../../css/r/r_01umbet.css';
import '../../css/e/et7ufkrmd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="kp4ebdcxj"/><path class="r_01umbet"/><path class="et7ufkrmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:help-chat-2"} {...others} />);
}

export default Component;
