import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsfum1qaj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tsfum1qaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ticket-percent-filled"} {...others} />);
}

export default Component;
