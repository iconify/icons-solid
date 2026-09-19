import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tegfuw84b.css';
import '../../css/u/ub1g9bczo.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="tegfuw84b"/><path class="ub1g9bczo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:trophy"} {...others} />);
}

export default Component;
