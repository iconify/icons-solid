import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kgugpibha.css';
import '../../css/o/os5b4vbrt.css';
import '../../css/s/sj1g9qbqm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="kgugpibha"/><path class="os5b4vbrt"/><path class="sj1g9qbqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:satellite"} {...others} />);
}

export default Component;
