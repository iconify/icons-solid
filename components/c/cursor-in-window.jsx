import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g7s7v3dwf.css';
import '../../css/h/h_no2wbte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g7s7v3dwf"/><path class="h_no2wbte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cursor-in-window"} {...others} />);
}

export default Component;
