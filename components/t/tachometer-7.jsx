import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yhy_qabht.css';
import '../../css/u/uoathacvi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="yhy_qabht"/><path class="uoathacvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tachometer-7"} {...others} />);
}

export default Component;
