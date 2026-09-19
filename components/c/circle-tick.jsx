import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/unzlnruss.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="unzlnruss"/><polyline points="5.75 7.75 8.25 10.25 14.25 3.75"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:circle-tick"} {...others} />);
}

export default Component;
