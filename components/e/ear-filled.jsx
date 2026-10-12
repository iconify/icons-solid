import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xeiweu1nw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xeiweu1nw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ear-filled"} {...others} />);
}

export default Component;
