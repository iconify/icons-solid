import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ne-nryuhg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ne-nryuhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:moon-filled"} {...others} />);
}

export default Component;
