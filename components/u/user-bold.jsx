import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn55ge7zx.css';
import '../../css/p/pyk3u23xc.css';
import '../../css/m/mrpnast4z.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="tn55ge7zx"><path class="pyk3u23xc"/><path class="mrpnast4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:user-bold"} {...others} />);
}

export default Component;
