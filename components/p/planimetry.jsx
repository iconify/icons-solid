import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dblya9l_b.css';
import '../../css/f/fi-6_qg2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dblya9l_b"/><path class="fi-6_qg2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:planimetry"} {...others} />);
}

export default Component;
