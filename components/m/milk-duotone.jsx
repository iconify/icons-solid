import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7r3bok2a.css';
import '../../css/t/tiefb7boe.css';
import '../../css/q/qnm-tdbsp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p7r3bok2a"/><path class="tiefb7boe"/><path class="qnm-tdbsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:milk-duotone"} {...others} />);
}

export default Component;
