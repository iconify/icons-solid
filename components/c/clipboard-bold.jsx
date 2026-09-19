import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l26hlcvna.css';
import '../../css/d/dpqbvn50y.css';
import '../../css/m/mqhfzvbma.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l26hlcvna"/><path class="dpqbvn50y"/><rect class="mqhfzvbma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:clipboard-bold"} {...others} />);
}

export default Component;
