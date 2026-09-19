import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/av6wb0hph.css';
import '../../css/d/d9qhc9bdx.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="av6wb0hph"/><path class="d9qhc9bdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:container"} {...others} />);
}

export default Component;
