import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w7bb-0img.css';
import '../../css/d/dgqr1ac6r.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="w7bb-0img"/><path class="dgqr1ac6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tachometer-2"} {...others} />);
}

export default Component;
