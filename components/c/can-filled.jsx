import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt_o1d_3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lt_o1d_3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:can-filled"} {...others} />);
}

export default Component;
