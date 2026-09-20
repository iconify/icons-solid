import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr0ize7uv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hr0ize7uv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:chess-rook"} {...others} />);
}

export default Component;
