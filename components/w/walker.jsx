import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jjj8m_bpx.css';
import '../../css/t/tz2r6xb1s.css';
import '../../css/e/etow-acuw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="jjj8m_bpx"/><path class="tz2r6xb1s"/><path class="etow-acuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:walker"} {...others} />);
}

export default Component;
