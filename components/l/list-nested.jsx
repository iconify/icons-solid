import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jkwde5hmk.css';
import '../../css/x/xn5np7bxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jkwde5hmk"/><path class="xn5np7bxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:list-nested"} {...others} />);
}

export default Component;
