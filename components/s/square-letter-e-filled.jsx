import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w45cde5tb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w45cde5tb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-letter-e-filled"} {...others} />);
}

export default Component;
