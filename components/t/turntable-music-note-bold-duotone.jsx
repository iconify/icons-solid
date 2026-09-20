import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pf1tdnshj.css';
import '../../css/o/onn26uc-u.css';
import '../../css/u/udh2xlitm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pf1tdnshj"/><path clip-rule="evenodd" class="onn26uc-u"/><path class="udh2xlitm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:turntable-music-note-bold-duotone"} {...others} />);
}

export default Component;
