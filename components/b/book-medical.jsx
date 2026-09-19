import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdhe4kbnm.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="gdhe4kbnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:book-medical"} {...others} />);
}

export default Component;
