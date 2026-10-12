import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqp8j6bvf.css';
import '../../css/m/mjdzrmbys.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tqp8j6bvf"/><path class="mjdzrmbys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:flask-conical-off-filled"} {...others} />);
}

export default Component;
