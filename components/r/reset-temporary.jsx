import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/w/w7y2_zn0h.css';
import '../../css/o/oeuerccbj.css';
import '../../css/o/olhj8txmz.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="matrix(0 1 1 0 2.5 2.5)" class="jtowsomii"><path class="w7y2_zn0h"/><circle class="oeuerccbj"/><path class="olhj8txmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:reset-temporary"} {...others} />);
}

export default Component;
