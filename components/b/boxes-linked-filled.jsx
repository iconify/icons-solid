import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5q_y96bd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k5q_y96bd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:boxes-linked-filled"} {...others} />);
}

export default Component;
