import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v271sd3za.css';
import '../../css/r/rx2f-xb4d.css';
import '../../css/o/oe608fbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v271sd3za"/><path class="rx2f-xb4d"/><path class="oe608fbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:fan-duotone"} {...others} />);
}

export default Component;
