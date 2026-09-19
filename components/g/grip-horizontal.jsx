import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5vde9b2q.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="f5vde9b2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:grip-horizontal"} {...others} />);
}

export default Component;
