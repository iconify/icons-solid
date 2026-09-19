import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pqqbsibpd.css';
import '../../css/g/g2ujq98oz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="pqqbsibpd"/><path class="g2ujq98oz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:rocket"} {...others} />);
}

export default Component;
