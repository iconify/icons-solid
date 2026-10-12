import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntu5cfbty.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ntu5cfbty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-input-filled"} {...others} />);
}

export default Component;
