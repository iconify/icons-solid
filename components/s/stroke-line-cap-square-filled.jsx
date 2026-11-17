import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jse3np_ai.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jse3np_ai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:stroke-line-cap-square-filled"} {...others} />);
}

export default Component;
