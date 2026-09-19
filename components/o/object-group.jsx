import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e_7hchzpy.css';
import '../../css/b/bhpq5bzma.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="e_7hchzpy"/><path class="bhpq5bzma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:object-group"} {...others} />);
}

export default Component;
