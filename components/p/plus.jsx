import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/uqz3ssidv.css';
import '../../css/g/gab0h-cqq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="uqz3ssidv"/><path class="gab0h-cqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:plus"} {...others} />);
}

export default Component;
