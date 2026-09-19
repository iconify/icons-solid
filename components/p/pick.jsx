import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kjc0fr6xx.css';
import '../../css/t/tzbmdywci.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="n1lsf0bnc"><path class="kjc0fr6xx"/><path class="tzbmdywci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:pick"} {...others} />);
}

export default Component;
