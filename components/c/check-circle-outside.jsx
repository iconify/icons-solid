import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/t/t7q-akbba.css';
import '../../css/a/auk9ztbdv.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="t7q-akbba"/><path class="auk9ztbdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:check-circle-outside"} {...others} />);
}

export default Component;
