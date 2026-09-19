import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bvy93fbvi.css';
import '../../css/o/o-al02bsf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="bvy93fbvi"/><path class="o-al02bsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:border-duo"} {...others} />);
}

export default Component;
