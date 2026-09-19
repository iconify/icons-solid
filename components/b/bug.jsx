import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/slhe7zbmn.css';
import '../../css/m/m33g7rbqu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="slhe7zbmn"/><path class="m33g7rbqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:bug"} {...others} />);
}

export default Component;
