import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9v3tvbiy.css';
import '../../css/o/owd--tbds.css';
import '../../css/h/hbedzngty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k9v3tvbiy"/><path class="owd--tbds"/><path class="hbedzngty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:plug-duotone"} {...others} />);
}

export default Component;
