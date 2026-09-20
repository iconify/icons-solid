import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/b/bluheubuq.css';
import '../../css/k/kuv1vkb9v.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(3 2)" class="jtowsomii"><path class="bluheubuq"/><circle class="kuv1vkb9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:notification"} {...others} />);
}

export default Component;
