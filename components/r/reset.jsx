import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/w/wdk1d7zll.css';
import '../../css/x/xzt-r3bal.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="wdk1d7zll"/><path class="xzt-r3bal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:reset"} {...others} />);
}

export default Component;
