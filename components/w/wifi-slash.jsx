import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyqpd9b6v.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="cyqpd9b6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:wifi-slash"} {...others} />);
}

export default Component;
