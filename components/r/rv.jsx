import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nscm_ubhz.css';
import '../../css/t/tcbys4b4b.css';
import '../../css/u/u62i7907q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="nscm_ubhz"/><path class="tcbys4b4b"/><path class="u62i7907q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:rv"} {...others} />);
}

export default Component;
