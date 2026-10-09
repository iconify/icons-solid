import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwfb0b_qf.css';
import '../../css/q/qxaxj2trm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qwfb0b_qf"/><path class="qxaxj2trm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:run-of-river-20"} {...others} />);
}

export default Component;
