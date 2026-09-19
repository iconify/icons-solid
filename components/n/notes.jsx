import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oxozorj5q.css';
import '../../css/m/mb8r-gcqw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="oxozorj5q"/><path class="mb8r-gcqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:notes"} {...others} />);
}

export default Component;
