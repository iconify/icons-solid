import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1_to411n.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="q1_to411n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:money-dollar-circle"} {...others} />);
}

export default Component;
