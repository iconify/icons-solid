import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jm-h8ebfd.css';
import '../../css/f/fzlatcc_e.css';
import '../../css/t/t048yihdc.css';
import '../../css/l/lap-h8eft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jm-h8ebfd"/><path class="fzlatcc_e wm-a"/><path class="t048yihdc"/><path class="lap-h8eft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:door-open-duo"} {...others} />);
}

export default Component;
