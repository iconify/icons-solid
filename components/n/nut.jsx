import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/n/nj69sobsr.css';
import '../../css/o/oy8-2ebuw.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(4 3)" class="jtowsomii"><path class="nj69sobsr"/><circle class="oy8-2ebuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:nut"} {...others} />);
}

export default Component;
