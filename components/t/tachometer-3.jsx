import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yhy_qabht.css';
import '../../css/d/dcc5cla3v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="yhy_qabht"/><path class="dcc5cla3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tachometer-3"} {...others} />);
}

export default Component;
