import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/ymz9_gbky.css';
import '../../css/b/bolb5gbrp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="ymz9_gbky"/><path class="bolb5gbrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:truck"} {...others} />);
}

export default Component;
