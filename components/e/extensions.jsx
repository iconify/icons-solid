import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y_-m0cbhx.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="y_-m0cbhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:extensions"} {...others} />);
}

export default Component;
