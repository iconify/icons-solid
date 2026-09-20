import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/ml6tcnb2h.css';
import '../../css/h/h4a2xbc9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ml6tcnb2h"/><path class="h4a2xbc9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:house-roof-off"} {...others} />);
}

export default Component;
