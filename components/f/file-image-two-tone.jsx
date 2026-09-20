import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xxcb1mbaj.css';
import '../../css/c/cop6wg96p.css';
import '../../css/k/ks6rcsblm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xxcb1mbaj"/><path class="cop6wg96p"/><path class="ks6rcsblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:file-image-two-tone"} {...others} />);
}

export default Component;
