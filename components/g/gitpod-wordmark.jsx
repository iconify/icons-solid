import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajs9rzzua.css';
import '../../css/f/fxfivubid.css';
import '../../css/q/q_3luyube.css';
import '../../css/o/oix-uob1h.css';
import '../../css/x/xro2bsbjk.css';
import '../../css/d/d_7fntncc.css';
import '../../css/b/bpos51ruz.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><clipPath id="SVG4yDWPevl"><path class="ajs9rzzua"/></clipPath><clipPath id="SVGpWR2VccD"><path class="fxfivubid"/></clipPath></defs><path class="q_3luyube"/><path class="oix-uob1h"/><g clip-path="url(#SVG4yDWPevl)"><path class="xro2bsbjk"/></g><path class="d_7fntncc"/><g clip-path="url(#SVGpWR2VccD)"><path class="bpos51ruz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:gitpod-wordmark"} {...others} />);
}

export default Component;
