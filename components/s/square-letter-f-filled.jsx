import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tffq05ozt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tffq05ozt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-letter-f-filled"} {...others} />);
}

export default Component;
