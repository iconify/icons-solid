import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6k2dc_jl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s6k2dc_jl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:badge-minus-filled"} {...others} />);
}

export default Component;
