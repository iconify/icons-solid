import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eapp-bwan.css';
import '../../css/a/awotvxbnd.css';
import '../../css/s/s-kif6i1z.css';
import '../../css/h/hctt3acdl.css';
import '../../css/d/dne0f28rx.css';
import '../../css/x/xx1iqsb0m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eapp-bwan"/><path class="awotvxbnd"/><path class="s-kif6i1z"/><path class="hctt3acdl"/><path d="M10 4s2-2 4 0s4 0 4 0" class="dne0f28rx"><animate attributeName="d" dur="2s" repeatCount="indefinite" values="M10 4c0 0 2-2 4 0s4 0 4 0; M10 2c0 0 2-2 4 0s4 0 4 0; M10 4c0 0 2-2 4 0s4 0 4 0"/></path><path d="M10 4s2-2 4 0s4 0 4 0" class="xx1iqsb0m"><animate attributeName="d" dur="2s" repeatCount="indefinite" values="M10 4c0 0 2-2 4 0s4 0 4 0; M10 2c0 0 2-2 4 0s4 0 4 0; M10 4c0 0 2-2 4 0s4 0 4 0"/></path>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kokoro-tts"} {...others} />);
}

export default Component;
