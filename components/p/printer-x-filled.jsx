import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pb1pjibpf.css';
import '../../css/g/g46hbrb1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pb1pjibpf"/><path class="g46hbrb1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:printer-x-filled"} {...others} />);
}

export default Component;
