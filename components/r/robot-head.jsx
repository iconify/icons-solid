import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/of6s0nb6x.css';
import '../../css/z/z898vhn-b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="of6s0nb6x"/><path class="z898vhn-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:robot-head"} {...others} />);
}

export default Component;
