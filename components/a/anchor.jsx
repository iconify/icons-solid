import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w_8zdphyl.css';
import '../../css/j/j58rm48ey.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="w_8zdphyl"/><circle class="j58rm48ey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:anchor"} {...others} />);
}

export default Component;
