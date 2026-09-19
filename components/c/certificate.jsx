import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m7n95beto.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polyline points="11.25 1.75 2.75 1.75 2.75 13.25 5.25 13.25"/><polyline points="8.75 9.75 8.25 14.25 10.5 13.25 12.75 14.25 12.25 9.75"/><circle class="m7n95beto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:certificate"} {...others} />);
}

export default Component;
