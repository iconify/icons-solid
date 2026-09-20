import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cpufpoz9c.css';
import '../../css/v/vw_1j0cad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cpufpoz9c"/><path class="vw_1j0cad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-x-corner"} {...others} />);
}

export default Component;
