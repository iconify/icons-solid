import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iakgoukpg.css';
import '../../css/p/pabyqgbcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iakgoukpg"/><path clip-rule="evenodd" class="pabyqgbcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-scissors-filled"} {...others} />);
}

export default Component;
