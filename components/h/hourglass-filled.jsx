import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sthyiab9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sthyiab9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hourglass-filled"} {...others} />);
}

export default Component;
