import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjomfxbol.css';
import '../../css/p/p23ngibzj.css';
import '../../css/f/fw-xaacke.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tjomfxbol"/><path clip-rule="evenodd" class="p23ngibzj"/><path class="fw-xaacke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:inbox-favorite-flat"} {...others} />);
}

export default Component;
