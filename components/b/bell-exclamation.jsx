import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/az06j0fze.css';
import '../../css/a/agninsb1b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="az06j0fze"/><path class="agninsb1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bell-exclamation"} {...others} />);
}

export default Component;
