import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h5tyyqhes.css';
import '../../css/e/efmcsd_5s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="h5tyyqhes"/><path class="efmcsd_5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:baseball-duo"} {...others} />);
}

export default Component;
