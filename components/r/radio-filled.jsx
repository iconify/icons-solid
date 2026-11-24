import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrlnyzn3k.css';
import '../../css/z/z3hyr2b6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vrlnyzn3k"/><path class="z3hyr2b6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:radio-filled"} {...others} />);
}

export default Component;
