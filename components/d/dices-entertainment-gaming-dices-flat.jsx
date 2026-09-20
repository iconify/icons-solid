import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9vahr_ms.css';
import '../../css/f/fm1ertpku.css';
import '../../css/w/wo9496hog.css';
import '../../css/k/ks3ogwbug.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="z9vahr_ms"/><path clip-rule="evenodd" class="fm1ertpku"/><path clip-rule="evenodd" class="wo9496hog"/><path class="ks3ogwbug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:dices-entertainment-gaming-dices-flat"} {...others} />);
}

export default Component;
