import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spe2vy0_x.css';
import '../../css/i/ihob9llwi.css';
import '../../css/f/fe3otccrn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="spe2vy0_x"/><path clip-rule="evenodd" class="ihob9llwi"/><path class="fe3otccrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:play-list-8-flat"} {...others} />);
}

export default Component;
