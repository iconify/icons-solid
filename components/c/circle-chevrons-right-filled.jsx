import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssrhi3bta.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ssrhi3bta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-chevrons-right-filled"} {...others} />);
}

export default Component;
