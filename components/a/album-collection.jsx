import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/prztxk67h.css';
import '../../css/s/st0k6jbed.css';
import '../../css/y/y-a0iibgi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="prztxk67h"/><path class="st0k6jbed"/><path class="y-a0iibgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:album-collection"} {...others} />);
}

export default Component;
