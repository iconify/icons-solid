import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uu5h2jbad.css';
import '../../css/t/tdcs2qbha.css';
import '../../css/g/g-5dr9scz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uu5h2jbad"/><path class="tdcs2qbha"/><path class="g-5dr9scz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:lamp-wall-up-duotone"} {...others} />);
}

export default Component;
