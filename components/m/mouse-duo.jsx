import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rnqb1u6-m.css';
import '../../css/g/gtufojbun.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="rnqb1u6-m"/><path class="gtufojbun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mouse-duo"} {...others} />);
}

export default Component;
