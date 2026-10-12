import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1h1xacii.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v1h1xacii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:map-pin-plus-inside-filled"} {...others} />);
}

export default Component;
