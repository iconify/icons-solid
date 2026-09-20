import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f9_wrwbrn.css';
import '../../css/l/lfcen-bmn.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(3 5)" class="bi12bsetm"><path class="f9_wrwbrn"/><circle class="lfcen-bmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:iphone-landscape"} {...others} />);
}

export default Component;
