import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/v/v4aidkk0v.css';
import '../../css/j/j0a0itbka.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="v4aidkk0v"/><path class="j0a0itbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:branch"} {...others} />);
}

export default Component;
