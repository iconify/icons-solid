import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejb-d7dxo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ejb-d7dxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:vegan-filled"} {...others} />);
}

export default Component;
