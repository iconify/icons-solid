import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-8t4ybdq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t-8t4ybdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ticket-filled"} {...others} />);
}

export default Component;
