import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amxt-xpqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="amxt-xpqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:utensils-crossed-filled"} {...others} />);
}

export default Component;
