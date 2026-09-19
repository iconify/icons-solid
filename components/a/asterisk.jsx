import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/x-eit7b8n.css';
import '../../css/x/x8am1obfu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="x-eit7b8n"/><path class="x8am1obfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:asterisk"} {...others} />);
}

export default Component;
