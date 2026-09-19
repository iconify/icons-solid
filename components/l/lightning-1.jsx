import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i27k4gb-i.css';
import '../../css/b/bsvw6huwc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="i27k4gb-i"/><path class="bsvw6huwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:lightning-1"} {...others} />);
}

export default Component;
