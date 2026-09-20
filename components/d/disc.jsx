import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/a/agd2mgb0r.css';
import '../../css/i/i-6ka3ruo.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><circle class="agd2mgb0r"/><circle class="i-6ka3ruo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:disc"} {...others} />);
}

export default Component;
