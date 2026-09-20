import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/z/zmslvebwb.css';
import '../../css/u/uc7v4v_cp.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(3 4)" class="jtowsomii"><path class="zmslvebwb"/><circle class="uc7v4v_cp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:wifi-error"} {...others} />);
}

export default Component;
