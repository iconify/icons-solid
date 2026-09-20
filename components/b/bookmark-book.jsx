import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/i/ibr5ixl_o.css';
import '../../css/d/do1ou9w3f.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="ibr5ixl_o"/><path class="do1ou9w3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:bookmark-book"} {...others} />);
}

export default Component;
