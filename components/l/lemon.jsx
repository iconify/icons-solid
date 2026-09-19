import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfi9oobug.css';
import '../../css/b/b_wglmqab.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jfi9oobug"/><path class="b_wglmqab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:lemon"} {...others} />);
}

export default Component;
