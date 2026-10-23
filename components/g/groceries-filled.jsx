import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyz221lmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vyz221lmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:groceries-filled"} {...others} />);
}

export default Component;
