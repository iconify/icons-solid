import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/nndam4mwm.css';
import '../../css/i/ifaxg67dv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="nndam4mwm"/><path class="ifaxg67dv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:union"} {...others} />);
}

export default Component;
