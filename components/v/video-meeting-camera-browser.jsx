import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b75e_lodc.css';
import '../../css/b/bde9dkbcy.css';
import '../../css/o/o0e_e_brz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="b75e_lodc"/><path class="bde9dkbcy"/><path class="o0e_e_brz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:video-meeting-camera-browser"} {...others} />);
}

export default Component;
