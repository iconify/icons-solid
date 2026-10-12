import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lj_w8hblv.css';
import '../../css/o/okc6r4m0z.css';
import '../../css/n/ns0x3kbdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lj_w8hblv"/><path class="okc6r4m0z"/><path class="ns0x3kbdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:balloon-duotone"} {...others} />);
}

export default Component;
