import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ly7qoj00u.css';
import '../../css/z/z6cin8b0o.css';
import '../../css/f/fdp43wbff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ly7qoj00u"/><path class="z6cin8b0o"/><path class="fdp43wbff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:plant-pot-duotone"} {...others} />);
}

export default Component;
