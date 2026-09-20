import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ozdkyobjs.css';
import '../../css/o/onrdkcgyc.css';
import '../../css/h/hlhch7b9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ozdkyobjs"/><path class="onrdkcgyc"/><path clip-rule="evenodd" class="hlhch7b9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:passport-minimalistic-bold"} {...others} />);
}

export default Component;
