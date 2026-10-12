import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-i69rhzg.css';
import '../../css/v/vo206n5fa.css';
import '../../css/z/z7o02f_5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t-i69rhzg"/><path class="vo206n5fa"/><path class="z7o02f_5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-open-duotone"} {...others} />);
}

export default Component;
