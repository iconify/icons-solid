import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3kj2qixg.css';
import '../../css/w/wygmz5bob.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v3kj2qixg"/><path class="wygmz5bob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-arrow-down-right-enter-filled"} {...others} />);
}

export default Component;
