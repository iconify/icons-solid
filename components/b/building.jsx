import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sudv4fsht.css';
import '../../css/a/a1bltozvo.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="sudv4fsht"/><path class="a1bltozvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:building"} {...others} />);
}

export default Component;
