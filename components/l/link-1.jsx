import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xec58ci5x.css';
import '../../css/k/kuo1ytbsw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="xec58ci5x"/><path class="kuo1ytbsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:link-1"} {...others} />);
}

export default Component;
