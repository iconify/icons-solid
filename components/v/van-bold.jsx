import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jxz04mbly.css';
import '../../css/m/m_rt4_bcb.css';
import '../../css/v/vuso242af.css';
import '../../css/q/qxsgg6psh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jxz04mbly"/><path class="m_rt4_bcb"/><path class="vuso242af"/><path class="qxsgg6psh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:van-bold"} {...others} />);
}

export default Component;
