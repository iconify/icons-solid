import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smkeq5bnj.css';
import '../../css/p/p65kv2v4k.css';
import '../../css/d/dtata7b4z.css';
import '../../css/w/wnl8esb6h.css';
import '../../css/o/oe9pdrcad.css';
import '../../css/z/za3i1cbib.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGB7anacMZ" x1="85.802" x2="582.437" y1="534.316" y2="961.604" gradientTransform="matrix(.5625 0 0 .568 -57.88 -288.938)" gradientUnits="userSpaceOnUse"><stop offset="0" class="smkeq5bnj"/><stop offset="1" class="p65kv2v4k"/></linearGradient><path fill="url(#SVGB7anacMZ)" class="dtata7b4z"/><linearGradient id="SVGh2yYpzWr" x1="774.444" x2="597.096" y1="1220.223" y2="969.306" gradientTransform="matrix(.5625 0 0 .568 -57.88 -288.938)" gradientUnits="userSpaceOnUse"><stop offset="0" class="wnl8esb6h"/><stop offset="1" class="oe9pdrcad"/></linearGradient><path fill="url(#SVGh2yYpzWr)" class="za3i1cbib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:python"} {...others} />);
}

export default Component;
