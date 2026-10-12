import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lekpzibzb.css';
import '../../css/p/p68t-_bma.css';
import '../../css/j/jeqtdlb7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lekpzibzb"/><path class="p68t-_bma"/><path class="jeqtdlb7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:search-code-duotone"} {...others} />);
}

export default Component;
