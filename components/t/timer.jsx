import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b5r0r31up.css';
import '../../css/u/uxas3qbtq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="b5r0r31up"/><path class="uxas3qbtq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:timer"} {...others} />);
}

export default Component;
