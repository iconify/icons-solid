import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zvxrz6bfm.css';
import '../../css/n/ncgcfebjl.css';
import '../../css/t/tvn32_g5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zvxrz6bfm"/><path class="ncgcfebjl"/><path class="tvn32_g5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-tick"} {...others} />);
}

export default Component;
