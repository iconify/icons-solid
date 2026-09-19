import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cbay_mbbl.css';
import '../../css/k/kb4o8e-ai.css';
import '../../css/k/kzxllvf1v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="cbay_mbbl"/><path class="kb4o8e-ai"/><path class="kzxllvf1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:polaroid"} {...others} />);
}

export default Component;
