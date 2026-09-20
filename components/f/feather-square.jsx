import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k0efmsbjc.css';
import '../../css/d/dofdo7dsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k0efmsbjc"/><path class="dofdo7dsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:feather-square"} {...others} />);
}

export default Component;
