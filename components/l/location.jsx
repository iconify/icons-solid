import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/d/d-8w03bro.css';
import '../../css/h/hrjfpsb2u.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(4 2)" class="jtowsomii"><path class="d-8w03bro"/><circle class="hrjfpsb2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:location"} {...others} />);
}

export default Component;
