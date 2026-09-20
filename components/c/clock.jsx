import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/i/i2qezbnqp.css';
import '../../css/z/zr5f84pqd.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="matrix(-1 0 0 1 19 2)" class="jtowsomii"><circle class="i2qezbnqp"/><path class="zr5f84pqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:clock"} {...others} />);
}

export default Component;
