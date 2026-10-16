import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-e81vb3y.css';
import '../../css/n/nlgovibwp.css';
import '../../css/e/ek-1xpvww.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i-e81vb3y"/><path class="nlgovibwp"/><path class="ek-1xpvww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pcb-20"} {...others} />);
}

export default Component;
