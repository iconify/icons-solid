import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jcog3sb1t.css';
import '../../css/q/qfx3b_qyy.css';
import '../../css/b/bdr13-bav.css';
import '../../css/h/hjrpc0b3y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="jcog3sb1t"/><path class="qfx3b_qyy"/><path class="bdr13-bav"/><path class="hjrpc0b3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-front"} {...others} />);
}

export default Component;
