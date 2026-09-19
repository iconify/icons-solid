import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nifbwvzib.css';
import '../../css/q/qp17nzbtl.css';
import '../../css/y/y9ni_79go.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="nifbwvzib"/><path class="qp17nzbtl"/><path class="y9ni_79go"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:gift-card"} {...others} />);
}

export default Component;
