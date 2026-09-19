import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lnskdto7f.css';
import '../../css/p/prj_r3o2k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="lnskdto7f"/><path class="prj_r3o2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:video"} {...others} />);
}

export default Component;
