import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c81mke7qu.css';
import '../../css/k/kh83tbifg.css';
import '../../css/o/o72zglf1i.css';
import '../../css/f/flfequx_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c81mke7qu"/><path class="kh83tbifg"/><path class="o72zglf1i"/><path class="flfequx_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hot-air-balloon-duotone"} {...others} />);
}

export default Component;
