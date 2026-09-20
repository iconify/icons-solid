import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nol46eswv.css';
import '../../css/w/w7c4a8b4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nol46eswv"/><path class="w7c4a8b4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:diaper"} {...others} />);
}

export default Component;
