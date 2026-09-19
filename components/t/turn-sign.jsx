import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t5_-0cbfa.css';
import '../../css/o/o2exp-bvg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="t5_-0cbfa"/><path class="o2exp-bvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:turn-sign"} {...others} />);
}

export default Component;
