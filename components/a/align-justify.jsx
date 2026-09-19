import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/q/qa_prub3o.css';
import '../../css/f/fnd2alblp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="qa_prub3o"/><path class="fnd2alblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:align-justify"} {...others} />);
}

export default Component;
