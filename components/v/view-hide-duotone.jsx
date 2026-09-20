import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u18xibb5p.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p-88isbpj.css';
import '../../css/q/q7_le6nbx.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGnvzg3hCy" class="u18xibb5p"/></defs><g class="ft5dv1b6b"><use href="#SVGnvzg3hCy" clip-rule="evenodd" class="d2kvgvbvc"/><path clip-rule="evenodd" class="p-88isbpj"/><use href="#SVGnvzg3hCy" clip-rule="evenodd" class="d2kvgvbvc"/><path class="q7_le6nbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:view-hide-duotone"} {...others} />);
}

export default Component;
