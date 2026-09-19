import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggh7wdatt.css';

const viewBox = {"width":328,"height":512};
const content = `<path class="ggh7wdatt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:guy-user"} {...others} />);
}

export default Component;
