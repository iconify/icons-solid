import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laycz8bxo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="laycz8bxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:can-soda-filled"} {...others} />);
}

export default Component;
