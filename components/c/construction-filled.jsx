import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbxliw40u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hbxliw40u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:construction-filled"} {...others} />);
}

export default Component;
