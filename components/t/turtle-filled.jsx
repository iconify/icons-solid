import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e34d7oyji.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e34d7oyji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:turtle-filled"} {...others} />);
}

export default Component;
