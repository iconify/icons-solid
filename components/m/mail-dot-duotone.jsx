import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oel4ofb7x.css';
import '../../css/s/shxonjffg.css';
import '../../css/o/ol-n2bb3o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oel4ofb7x"/><path class="shxonjffg"/><path class="ol-n2bb3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-dot-duotone"} {...others} />);
}

export default Component;
