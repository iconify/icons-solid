import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0y3lu1_e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v0y3lu1_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-user-filled"} {...others} />);
}

export default Component;
