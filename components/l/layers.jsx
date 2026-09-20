import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dj13v5b8d.css';
import '../../css/r/ri499z-mz.css';
import '../../css/x/xkdwwkbtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dj13v5b8d"/><path class="ri499z-mz"/><path class="xkdwwkbtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:layers"} {...others} />);
}

export default Component;
