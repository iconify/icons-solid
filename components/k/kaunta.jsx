import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz0dcbb8n.css';
import '../../css/a/acpm77yta.css';
import '../../css/e/eh9hibb6l.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGsROPFdNx" x1="-.1" x2="51244.4" y1="507.8" y2="-49951.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="oz0dcbb8n"/><stop offset="1" class="acpm77yta"/></linearGradient><path fill="url(#SVGsROPFdNx)" class="eh9hibb6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kaunta"} {...others} />);
}

export default Component;
