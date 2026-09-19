import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v47yz274o.css';
import '../../css/h/h7ieklbgl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="v47yz274o"/><path class="h7ieklbgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:wifi-warning"} {...others} />);
}

export default Component;
