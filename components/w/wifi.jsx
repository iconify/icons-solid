import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/o/om1jfjbon.css';
import '../../css/h/hghunxbuh.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(3 6)" class="jtowsomii"><path class="om1jfjbon"/><circle class="hghunxbuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:wifi"} {...others} />);
}

export default Component;
