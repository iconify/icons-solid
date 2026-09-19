import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ds8d-1bsn.css';
import '../../css/m/m3wwuvbrm.css';
import '../../css/l/lyd1vfrtt.css';
import '../../css/l/l2ez41big.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ds8d-1bsn"/><path clip-rule="evenodd" class="m3wwuvbrm"/><path clip-rule="evenodd" class="lyd1vfrtt"/><path class="l2ez41big"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-crash-bold"} {...others} />);
}

export default Component;
