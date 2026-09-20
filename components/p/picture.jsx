import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zkbga2bms.css';
import '../../css/m/m0-54lvnp.css';
import '../../css/i/i9hetd4rr.css';
import '../../css/m/m6hk46bel.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(3 3)" class="bi12bsetm"><g class="zkbga2bms"><path class="m0-54lvnp"/><path class="i9hetd4rr"/></g><circle class="m6hk46bel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:picture"} {...others} />);
}

export default Component;
