import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g7v77rsge.css';
import '../../css/o/o18h_absn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="g7v77rsge"/><path class="o18h_absn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:briefcase"} {...others} />);
}

export default Component;
