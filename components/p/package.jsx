import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iusjtvbzu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polygon points="1.75 5.75 1.75 14.25 1.75 14.25 14.25 14.25 14.25 5.75 10.75 1.75 5.25 1.75"/><path class="iusjtvbzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:package"} {...others} />);
}

export default Component;
