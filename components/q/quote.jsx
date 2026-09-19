import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c039ieb1s.css';
import '../../css/b/bgbvgebha.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="c039ieb1s"/><path class="bgbvgebha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:quote"} {...others} />);
}

export default Component;
