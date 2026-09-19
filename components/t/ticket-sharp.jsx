import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_5uwvqjm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h_5uwvqjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:ticket-sharp"} {...others} />);
}

export default Component;
