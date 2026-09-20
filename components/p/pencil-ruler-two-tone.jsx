import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/amr5z33uf.css';
import '../../css/v/vxfukemug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="amr5z33uf"/><path class="vxfukemug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pencil-ruler-two-tone"} {...others} />);
}

export default Component;
