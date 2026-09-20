import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/n/nvk7ukbau.css';
import '../../css/d/d7_g8gbsv.css';
import '../../css/z/zyhn94bau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="nvk7ukbau"/><path class="d7_g8gbsv"/><path class="zyhn94bau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:money-time"} {...others} />);
}

export default Component;
