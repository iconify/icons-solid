import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/exk4wibjo.css';
import '../../css/v/vs10wab7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="exk4wibjo"/><path class="vs10wab7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:frustum-plus"} {...others} />);
}

export default Component;
