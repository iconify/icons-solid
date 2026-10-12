import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvc5zobxq.css';
import '../../css/c/curqijbxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mvc5zobxq"/><path clip-rule="evenodd" class="curqijbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:briefcase-business-filled"} {...others} />);
}

export default Component;
