import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpw9o4b4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gpw9o4b4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shield-ellipsis-filled"} {...others} />);
}

export default Component;
