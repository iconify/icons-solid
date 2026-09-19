import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vswvcjbcf.css';
import '../../css/a/a3l_nih8k.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="vswvcjbcf"/><path class="a3l_nih8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:monitor"} {...others} />);
}

export default Component;
