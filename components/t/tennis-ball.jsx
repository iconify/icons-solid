import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d6hkj8bdh.css';
import '../../css/w/wdmvt9bcj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="d6hkj8bdh"/><path class="wdmvt9bcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tennis-ball"} {...others} />);
}

export default Component;
