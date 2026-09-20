import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v8x69abti.css';
import '../../css/f/fatrmacev.css';
import '../../css/u/u-ko-2vho.css';
import '../../css/a/axi6m4bwm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="v8x69abti"/><path class="fatrmacev"/><path class="u-ko-2vho"/><path class="axi6m4bwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:camera-video"} {...others} />);
}

export default Component;
