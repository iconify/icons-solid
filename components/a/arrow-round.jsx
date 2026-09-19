import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oieh_xjfg.css';
import '../../css/o/orhoywdnf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="oieh_xjfg"/><path class="orhoywdnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-round"} {...others} />);
}

export default Component;
