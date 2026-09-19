import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/ri7r21frf.css';
import '../../css/f/f_jesn_rj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ri7r21frf"/><path class="f_jesn_rj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rose"} {...others} />);
}

export default Component;
