import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z_bo8yb6h.css';
import '../../css/y/y349j2fkf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="z_bo8yb6h"/><path class="y349j2fkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:path"} {...others} />);
}

export default Component;
