import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/ft3newbuc.css';
import '../../css/m/m_s4l22-d.css';
import '../../css/i/i6qlhhbth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ft3newbuc"/><rect class="m_s4l22-d"/><path class="i6qlhhbth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:error-401"} {...others} />);
}

export default Component;
