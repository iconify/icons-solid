import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwoubej7v.css';
import '../../css/h/hcb6vpbff.css';
import '../../css/v/vp91a6bdu.css';
import '../../css/a/afq-scbon.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGfhIGhbnB"><path class="uwoubej7v"/></clipPath></defs><g clip-path="url(#SVGfhIGhbnB)" transform="translate(0 75.1)scale(.853)"><path class="hcb6vpbff"/><path class="vp91a6bdu"/><path class="afq-scbon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cd-1x1"} {...others} />);
}

export default Component;
