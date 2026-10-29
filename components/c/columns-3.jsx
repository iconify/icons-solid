import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k6kugvbfl.css';
import '../../css/m/ma-sjozmi.css';
import '../../css/c/cfxmm5beq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="k6kugvbfl"/><path class="ma-sjozmi"/><path class="cfxmm5beq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:columns-3"} {...others} />);
}

export default Component;
