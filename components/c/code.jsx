import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/a/arn4pmjgn.css';
import '../../css/a/akigzzbpt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="arn4pmjgn"/><path class="akigzzbpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:code"} {...others} />);
}

export default Component;
