import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6o2oxbso.css';
import '../../css/c/c5mar1biz.css';
import '../../css/g/g48c9l9px.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i6o2oxbso"/><path class="c5mar1biz"/><path class="g48c9l9px"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:receipt-cent-duotone"} {...others} />);
}

export default Component;
