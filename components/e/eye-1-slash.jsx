import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u5klyabmf.css';
import '../../css/k/k6pegacqd.css';
import '../../css/i/io6o-5bro.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="u5klyabmf"/><path class="k6pegacqd"/><path class="io6o-5bro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:eye-1-slash"} {...others} />);
}

export default Component;
