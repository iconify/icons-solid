import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hl7obyb0a.css';
import '../../css/i/iq082ildw.css';
import '../../css/l/l2abzqbjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hl7obyb0a"/><path class="iq082ildw"/><path clip-rule="evenodd" class="l2abzqbjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifier-slash-outline"} {...others} />);
}

export default Component;
