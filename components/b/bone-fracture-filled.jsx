import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf2yuuixj.css';
import '../../css/r/rwu1_obmj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cf2yuuixj"/><path class="rwu1_obmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bone-fracture-filled"} {...others} />);
}

export default Component;
