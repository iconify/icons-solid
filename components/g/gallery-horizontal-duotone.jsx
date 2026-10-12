import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i03ibwbly.css';
import '../../css/n/n1sguyb9y.css';
import '../../css/l/l520w2onl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i03ibwbly"/><path class="n1sguyb9y"/><path class="l520w2onl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:gallery-horizontal-duotone"} {...others} />);
}

export default Component;
