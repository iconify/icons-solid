import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhqe3lmxn.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="xhqe3lmxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:align-left"} {...others} />);
}

export default Component;
