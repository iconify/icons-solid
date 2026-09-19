import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/t/tj32edcvs.css';
import '../../css/o/ocjb12a3h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><rect class="tj32edcvs"/><rect class="ocjb12a3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:toggle-2"} {...others} />);
}

export default Component;
