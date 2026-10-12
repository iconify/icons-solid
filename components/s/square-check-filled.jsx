import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn-_pbbrd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yn-_pbbrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-check-filled"} {...others} />);
}

export default Component;
