import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qyzwf4zkc.css';
import '../../css/w/wttgkpbfc.css';
import '../../css/j/jmwoe01_p.css';
import '../../css/y/y9d8ljilh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="qyzwf4zkc"/><path class="wttgkpbfc"/><path class="jmwoe01_p"/><path class="y9d8ljilh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-stand-middle"} {...others} />);
}

export default Component;
