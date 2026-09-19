import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/urwkllb7a.css';
import '../../css/w/wk9sgxnft.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="urwkllb7a"/><path class="wk9sgxnft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:smile"} {...others} />);
}

export default Component;
