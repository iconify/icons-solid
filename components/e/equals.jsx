import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/d/d7s3wzb3k.css';
import '../../css/h/hcr36eogo.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="d7s3wzb3k"/><path class="hcr36eogo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:equals"} {...others} />);
}

export default Component;
