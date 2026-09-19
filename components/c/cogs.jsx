import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/auzy0hbwl.css';
import '../../css/i/ivargsbvq.css';
import '../../css/s/s_6zp33hf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="auzy0hbwl"/><path class="ivargsbvq"/><path class="s_6zp33hf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cogs"} {...others} />);
}

export default Component;
