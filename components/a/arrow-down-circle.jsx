import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/i/i2qezbnqp.css';
import '../../css/g/g-u6jbcgo.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(3 2)" class="jtowsomii"><circle class="i2qezbnqp"/><path class="g-u6jbcgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:arrow-down-circle"} {...others} />);
}

export default Component;
