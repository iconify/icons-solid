import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dw4qe0bkg.css';
import '../../css/b/bbjxhee3h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="dw4qe0bkg"/><path class="bbjxhee3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:alarm-minus"} {...others} />);
}

export default Component;
