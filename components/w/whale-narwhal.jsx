import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t6hfltbdv.css';
import '../../css/m/mklms3qze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t6hfltbdv"/><path class="mklms3qze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:whale-narwhal"} {...others} />);
}

export default Component;
