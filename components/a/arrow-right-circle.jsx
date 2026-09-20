import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/i/i2qezbnqp.css';
import '../../css/q/qbq-s2ojy.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(3 2)" class="jtowsomii"><circle class="i2qezbnqp"/><path class="qbq-s2ojy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:arrow-right-circle"} {...others} />);
}

export default Component;
