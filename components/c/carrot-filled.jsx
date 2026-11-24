import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqtz6_m6n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cqtz6_m6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:carrot-filled"} {...others} />);
}

export default Component;
