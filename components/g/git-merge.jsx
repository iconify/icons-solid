import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jucwpjtyw.css';
import '../../css/t/t_el4tztg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jucwpjtyw"/><path class="t_el4tztg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:git-merge"} {...others} />);
}

export default Component;
