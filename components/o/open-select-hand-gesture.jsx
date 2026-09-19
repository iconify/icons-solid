import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f_s63lbuz.css';
import '../../css/w/wy5efpbad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f_s63lbuz"/><path class="wy5efpbad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:open-select-hand-gesture"} {...others} />);
}

export default Component;
