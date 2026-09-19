import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/n/nte4bac7y.css';
import '../../css/c/co_eleb2k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="nte4bac7y"/><path class="co_eleb2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:gift-2"} {...others} />);
}

export default Component;
