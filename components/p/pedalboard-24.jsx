import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/te0jk3ack.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="te0jk3ack"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:pedalboard-24"} {...others} />);
}

export default Component;
