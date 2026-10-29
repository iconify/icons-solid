import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f_o9585tx.css';
import '../../css/d/d86tz-2ji.css';
import '../../css/j/j7ffi82vm.css';
import '../../css/g/guyzwybqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="f_o9585tx"/><path class="d86tz-2ji wm-a"/><path class="j7ffi82vm"/><path class="guyzwybqo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:maximize-2-duo"} {...others} />);
}

export default Component;
