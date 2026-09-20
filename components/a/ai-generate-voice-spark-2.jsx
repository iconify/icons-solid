import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mj6fgwbpa.css';
import '../../css/d/dmb1-dajn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mj6fgwbpa"/><path class="dmb1-dajn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ai-generate-voice-spark-2"} {...others} />);
}

export default Component;
