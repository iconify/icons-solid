import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oh_lku0cz.css';
import '../../css/d/d7ym1acks.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oh_lku0cz"/><path class="d7ym1acks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-module-20-bold"} {...others} />);
}

export default Component;
