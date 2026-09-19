import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e95lwqnoz.css';
import '../../css/z/zx1vphjyn.css';
import '../../css/t/t0u4y_vup.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="e95lwqnoz"/><path class="zx1vphjyn"/><path class="t0u4y_vup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ying-yang"} {...others} />);
}

export default Component;
