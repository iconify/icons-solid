import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kfsyyqb1n.css';
import '../../css/q/q2doak16w.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="kfsyyqb1n"/><path class="q2doak16w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:certificate-scroll"} {...others} />);
}

export default Component;
