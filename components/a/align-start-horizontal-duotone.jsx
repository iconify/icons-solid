import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tlg1q3--k.css';
import '../../css/f/ftfzq_bzb.css';
import '../../css/g/gb0h6ft2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tlg1q3--k"/><path class="ftfzq_bzb"/><path class="gb0h6ft2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:align-start-horizontal-duotone"} {...others} />);
}

export default Component;
