import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o88ykrvvz.css';
import '../../css/w/wwhsvn6bz.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="o88ykrvvz"/><circle class="wwhsvn6bz"/><polyline points="6.25 12 6.25 2.75 14.25 1.75 14.25 11"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:music"} {...others} />);
}

export default Component;
