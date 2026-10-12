import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eaa77mjma.css';
import '../../css/n/ndoxdcoxt.css';
import '../../css/e/e9wo_3byf.css';
import '../../css/b/blhb6fbmq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eaa77mjma"/><path class="ndoxdcoxt"/><path class="e9wo_3byf"/><path class="blhb6fbmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bell-electric-duotone"} {...others} />);
}

export default Component;
