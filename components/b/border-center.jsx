import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/li9m6sqtf.css';
import '../../css/c/clljkznko.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="li9m6sqtf"/><path class="clljkznko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:border-center"} {...others} />);
}

export default Component;
