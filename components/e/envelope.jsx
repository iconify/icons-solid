import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gqpzczt0b.css';
import '../../css/e/et_ymoblb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="gqpzczt0b"/><path class="et_ymoblb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:envelope"} {...others} />);
}

export default Component;
