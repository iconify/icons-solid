import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a397vwbha.css';
import '../../css/t/t0x-i1v4p.css';
import '../../css/f/f5ysqvu5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a397vwbha"/><path class="t0x-i1v4p"/><path class="f5ysqvu5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:notebook-pen-duotone"} {...others} />);
}

export default Component;
