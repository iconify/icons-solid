import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l3e0zwbow.css';
import '../../css/p/pcna707ht.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="l3e0zwbow"/><path class="pcna707ht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bell-slash"} {...others} />);
}

export default Component;
