import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xlsx8bbyt.css';
import '../../css/m/mx9-lpb6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="xlsx8bbyt"/><path clip-rule="evenodd" class="mx9-lpb6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:airplay-sharp-fill"} {...others} />);
}

export default Component;
