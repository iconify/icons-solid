import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/v/v_iwu7bdo.css';
import '../../css/d/ds6f9vb4b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="v_iwu7bdo"/><path class="ds6f9vb4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:pie-slice"} {...others} />);
}

export default Component;
