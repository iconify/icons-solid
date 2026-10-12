import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-m4kzb8y.css';
import '../../css/g/gjba8cbzj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d-m4kzb8y"/><path class="gjba8cbzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-days-filled"} {...others} />);
}

export default Component;
