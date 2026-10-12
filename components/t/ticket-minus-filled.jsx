import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzi2ayb8d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xzi2ayb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ticket-minus-filled"} {...others} />);
}

export default Component;
