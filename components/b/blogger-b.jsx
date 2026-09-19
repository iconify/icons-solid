import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4s9n5t8l.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="s4s9n5t8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:blogger-b"} {...others} />);
}

export default Component;
