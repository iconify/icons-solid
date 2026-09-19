import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n9jtjbnps.css';
import '../../css/i/i9-nvjbvd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="n9jtjbnps"/><path class="i9-nvjbvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:history"} {...others} />);
}

export default Component;
