import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jx3ay999g.css';
import '../../css/b/bolb5gbrp.css';
import '../../css/j/js09wjuez.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="jx3ay999g"/><path class="bolb5gbrp"/><path class="js09wjuez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ambulance"} {...others} />);
}

export default Component;
