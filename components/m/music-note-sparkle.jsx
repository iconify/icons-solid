import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvkufybms.css';
import '../../css/s/sb191nbxw.css';
import '../../css/u/uu478ytul.css';
import '../../css/w/wcny-elpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fvkufybms"/><circle class="sb191nbxw"/><path class="uu478ytul"/><circle class="wcny-elpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-note-sparkle"} {...others} />);
}

export default Component;
