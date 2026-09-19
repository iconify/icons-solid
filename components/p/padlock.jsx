import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ysj-cjt5h.css';
import '../../css/u/uavqmpb5x.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="ysj-cjt5h"/><path class="uavqmpb5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:padlock"} {...others} />);
}

export default Component;
