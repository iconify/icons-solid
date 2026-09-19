import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/te89nobef.css';
import '../../css/j/jah6ktbbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="te89nobef"/><path class="jah6ktbbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:text-square"} {...others} />);
}

export default Component;
