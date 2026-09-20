import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/u/uniwrcbvr.css';
import '../../css/s/swkpvtp1u.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><circle class="uniwrcbvr"/><path class="swkpvtp1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:search"} {...others} />);
}

export default Component;
