import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvwejo4ga.css';
import '../../css/l/lcsno4kvg.css';
import '../../css/x/xyi2hiz_c.css';
import '../../css/o/ob9hncb7s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vvwejo4ga"/><path class="lcsno4kvg"/><path class="xyi2hiz_c"/><path class="ob9hncb7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-pen-line-duotone"} {...others} />);
}

export default Component;
