import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bz-l63bjr.css';
import '../../css/x/xpgqq5bjf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="bz-l63bjr"/><path class="xpgqq5bjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:edit"} {...others} />);
}

export default Component;
