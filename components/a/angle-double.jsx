import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jd4ffyb0r.css';
import '../../css/t/t5jmzf1ei.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="jd4ffyb0r"/><path class="t5jmzf1ei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:angle-double"} {...others} />);
}

export default Component;
